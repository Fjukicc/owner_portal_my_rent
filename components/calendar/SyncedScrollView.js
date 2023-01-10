import { useContext, useEffect, useRef, useState } from "react";
import { Animated, ScrollView, ScrollViewProps } from "react-native";
import { SyncedScrollViewContext } from "./SyncedScrollViewContext";

const SyncedScrollView = (props) => {
  const { id, ...rest } = props;
  const { activeScrollView, offsetPercent } = useContext(
    SyncedScrollViewContext
  );
  //get scrollviewDimensions
  const [scrollViewLength, setScrollViewLength] = useState(0);
  const [contentLength, setContentLength] = useState(0);

  const [scrollableLength, setScrollableLength] = useState(0);
//   console.log("ScrollableLength: ", scrollableLength);

  useEffect(() => {
    setScrollableLength(contentLength - scrollViewLength);
  }, [scrollViewLength, contentLength]);

  const handleLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }) => {
    // The length of the scrollView depends on the orientation we scroll in
    setScrollViewLength(props.horizontal ? width : height);
  };

  const handleContentSizeChange = (width, height) => {
    // The length of the content inside the scrollView depends on the orientation we scroll in
    setContentLength(props.horizontal ? width : height);
  };

  const scrollViewRef = useRef(null);

  offsetPercent?.addListener(({ value }) => {
    // Only respond to changes of the offsetPercent if this scrollView is NOT the activeScrollView
    // --> The active ScrollView responding to its own changes would cause an infinite loop
    // @ts-ignore
    if (id !== activeScrollView._value && scrollableLength > 0) {
      // Depending on the orientation we scroll in, we need to use different properties
      scrollViewRef.current?.scrollTo({
        [props.horizontal ? "x" : "y"]: value * scrollableLength,
        animated: false,
      });
    }
  });

  const offset = new Animated.Value(0);

  const handleScroll = Animated.event(
    // Depending on the orientation we scroll in, we need to use different properties
    [
      {
        nativeEvent: {
          contentOffset: { [props.horizontal ? "x" : "y"]: offset },
        },
      },
    ],
    { useNativeDriver: true }
  );

  offset.addListener(({ value }) => {
    // Only change the offsetPercent if the scrollView IS the activeScrollView
    // --> The inactive ScrollViews changing the offsetPercent would cause an infinite loop
    // @ts-ignore
    if (id === activeScrollView._value && scrollableLength > 0) {
      offsetPercent.setValue(value / scrollableLength);
    }
  });

  // Change this ScrollView to the active ScrollView when it is touched
  const handleTouchStart = () => {
    activeScrollView.setValue(id);
  };
  return (
    <Animated.ScrollView
      {...rest}
      ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      onTouchStart={handleTouchStart}
      onLayout={handleLayout}
      onContentSizeChange={handleContentSizeChange}
    >
    </Animated.ScrollView>
  );
};

export default SyncedScrollView;
