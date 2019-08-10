class API {
  static async login(user) {
    const response = await fetch(`https://externz-dev.herokuapp.com/api/v1/login${user}`);
    const data = await response.json();
    console.log(data);
  }
  static async business(business) {
    const response = await fetch(
      `https://externz.herokuapp-dev.com/api/v1/business${business}`
    );
    const data = await response.json();
    console.log(data);
  }
  static async student(student) {
    const response = await fetch(
      `https://externz.herokuapp-dev.com/api/v1/business${student}`
    );
    const data = await response.json();
    console.log(data);
  }
}
