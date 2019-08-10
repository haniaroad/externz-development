class API {
  static async login(user) {
    const response = await fetch(`https://externz.herokuapp.com/api/v1/login${user}`);
    const data = await response.json();
    console.log(data);
  }
  static async business(business) {
    const response = await fetch(
      `https://externz.herokuapp.com/api/v1/businesses${business}`
    );
    const data = await response.json();
    console.log(data);
  }
  static async student(student) {
    const response = await fetch(
      `https://externz.herokuapp.com/api/v1/businesses${student}`
    );
    const data = await response.json();
    console.log(data);
  }
}
