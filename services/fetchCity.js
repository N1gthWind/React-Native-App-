const URI = "http://localhost:8000";

export default {
  async loadcities() {
    let array = [];
    try {
      await fetch("http://localhost:8000/api/cities")
        .then((res) => res.json())
        .then((result) => {
          array.push(result);
        });
    } catch (e) {
      console.log(e);
    }

    return array;
  },
};
