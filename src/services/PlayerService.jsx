const mockFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "url") {
        resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              title: "Radio Fly - FM 92.3 - Albany",
              image: "https://api.raddios.com/api/radios/294/image/miniaturamovil?2021-10-04-09:08:31",
              mediaUrl:
                "https://ais-sa1.streamon.fm/7817_128k.aac",
            }),
        });
      } else {
        reject(new Error("Not Found"));
      }
    }, 1000); // Simulate network delay
  });
};

const getMedia = async () => {
  try {
    const resposne = await mockFetch("url"); //Chequear con piwi
    if (!resposne.ok) {
      throw new Error("Error at geting the audio");
    }
    const data = await resposne.json();
    return {
      title: data.title,
      image: data.image,
      mediaUrl: data.mediaUrl,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getMedia;
