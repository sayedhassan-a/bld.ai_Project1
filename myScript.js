const upd = function () {
  event.preventDefault();
  console.log(0);
  const item = document.getElementsByClassName("course-item");
  let fnd = document.getElementById("search-item").value.toLowerCase();

  for (let i = 0; i < 5; i++) {
    let st = item[i].getElementsByTagName("h3")[0].innerHTML;
    st = st.toLowerCase();
    if (st.search(fnd) == -1) {
      item[i].style.display = "none";
    } else {
      item[i].style.display = "initial";
    }
  }
};
