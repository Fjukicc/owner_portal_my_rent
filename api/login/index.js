//login
export const login = async (username, password) => {
  try {
    const response = fetch("http://api.my-rent.net/owners_app/get_guid", {
      method: "POST",
      body: JSON.stringify({
        u: username,
        p: password,
      }),
    });
    if (!response.ok) {
      throw new Error("FAILED TO LOGIN");
    }

    const credentials = await JSON.parse(response);

    return { success: true, data: credentials };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
