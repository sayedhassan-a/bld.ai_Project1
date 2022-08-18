const upd = function () {
  event.preventDefault();
  console.log(0);
  const item = document.getElementsByClassName("pers-course-item");
  let fnd = " " + document.getElementById("search-item").value.toLowerCase();

  for (let i = 0; i < 5; i++) {
    let st = item[i].getElementsByTagName("h3")[0].innerHTML;
    st = " " + st.toLowerCase();
    if (st.search(fnd) == -1) {
      item[i].style.display = "none";
    } else {
      item[i].style.display = "initial";
    }
  }
};
const add = function (item, child) {
  let space = document.createTextNode(" ");
  console.log("item");
  console.log(item);
  console.log("ch");
  console.log(child);
  item.appendChild(child);
  item.appendChild(space);
};
const view = function (link) {
  fetch("http://localhost:3000/courses")
    .then((res) => res.json())
    .then((data) => {
      const desc = document.getElementsByClassName("pers-courses-desc")[0];
      let title = document.createElement("h2");
      let parg = document.createElement("p");
      title.innerHTML = data.python.intro.title;
      parg.innerHTML = data.python.intro.parg;
      add(desc, title);
      add(desc, parg);
      const cur = document.getElementById("disp");
      let ch = 0;
      for (let j of data.python.content) {
        let item = j.course;
        let art = document.createElement("article");
        let img = document.createElement("img");
        let heading = document.createElement("h3");
        let author = document.createElement("p");
        let rate = document.createElement("span");
        let watched = document.createElement("span");
        let price = document.createElement("p");
        let final = document.createElement("s");

        art.className = "pers-course-item";
        img.className = "pers-course";
        heading.className = "pers-heading";
        author.className = "pers-author";
        rate.className = "pers-rate pers-rate-num";
        watched.className = "pers-watched";
        price.className = "pers-price";

        img.src = item.img;
        heading.innerHTML = item.heading;
        author.innerHTML = item.author;
        rate.innerHTML = item.rate;
        watched.innerHTML = "(" + item.watched + ")";
        price.innerHTML = "E£" + item.price + "  ";
        final.innerHTML = "E£" + item.final;

        add(price, final);
        add(art, img);
        add(art, heading);
        add(art, author);
        add(art, rate);
        let x = parseFloat(item.rate);
        for (let i = 0; i < 5; i++) {
          let s = document.createElement("span");
          if (x > 0.5) {
            s.className = "fa fa-star pers-rate";
          } else if (x > 0) {
            s.className = "fa fa-star-half-empty pers-rate";
          } else {
            s.className = "fa fa-star";
          }
          x--;
          console.log(x);
          add(art, s);
        }
        add(art, watched);
        add(art, price);
        console.log(art);
        let car = document.createElement("div");
        car.className = "";
        add(cur, art);
      }
    });
};
