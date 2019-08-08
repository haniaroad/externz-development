class API {
  static async login(user) {
    const response = await fetch(`https://git.heroku.com/externz.git/api/v1/login${user}`);
    const data = await response.json();
    console.log(data);
  }
  static async business(business) {
    const response = await fetch(
      `https://git.heroku.com/externz.git/api/v1/busines${business}`
    );
    const data = await response.json();
    console.log(data);
  }
  static async student(student) {
    const response = await fetch(
      `https://git.heroku.com/externz.git/api/v1/busines${student}`
    );
    const data = await response.json();
    console.log(data);
  }
}
