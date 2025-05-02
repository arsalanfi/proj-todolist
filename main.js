window.addEventListener("DOMContentLoaded", () => {
  let addBtn = document.getElementById("empty-main");
  let form = document.getElementById("add-form");
  let tagsBtn = document.getElementById("tags-Btn");
  let tags = document.getElementById("tags");
  let empty = document.getElementById("whatTask");
  let closeTask = document.getElementById("close-task");
  let tagImg = document.getElementById("tag-img");
  let tagImgC = document.getElementById("tag-img-c");
  addBtn.addEventListener("click", () => {
    addBtn.classList.add("hidden");
    empty.classList.add("hidden");
    form.classList.remove("hidden");
  });
  tagsBtn.addEventListener("click", () => {
    tags.classList.toggle("hidden");
    tagImg.classList.toggle("hidden");
    tagImgC.classList.toggle("hidden");
  });
  closeTask.addEventListener("click", () => {
    form.classList.add("hidden");
    empty.classList.remove("hidden");
    addBtn.classList.remove("hidden");
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    choosen.classList.add("hidden");
    span.remove();
    tagsBtn.classList.remove("hidden");
    tags.classList.remove("hidden");
  });
  //   let no = document.createElement("div");
  //   no.classList.add("bg-black", "w-[57px]", "h-[28px]");
  //   no.textContent = "nananana";
  //   tagsBtn.appendChild(no);
  //   console.log(tagsBtn);
  //تگ های رنگی
  const tagsC = document.querySelectorAll(".tag");
  const span = document.createElement("span");
  const choosen = document.getElementById("choosen-tag");
  tagsC.forEach((tag) => {
    tag.addEventListener("click", () => {
      tagsBtn.classList.add("hidden");
      tags.classList.add("hidden");
      choosen.classList.remove("hidden");
      choosen.classList.add("flex", "justifiy-center", "items-start");
      span.classList.add("font-[600]", "text-[12px]");
      choosen.appendChild(span);
      const selected = tag.dataset.value;
      if (selected == "پایین") {
        choosen.classList.add("bg-[#C3FFF1]");
        span.textContent = "پایین";
        span.classList.add("text-[#11A483]");
        console.log("مقدار", selected);
      } else if (selected == "متوسط") {
        choosen.classList.add("bg-[#FFEFD6]");
        span.textContent = "متوسط";
        span.classList.add("text-[#FFAF37]");
        console.log("مقدار", selected);
      } else if (selected == "بالا") {
        choosen.classList.add("bg-[#FFE2DB]");
        span.textContent = "بالا";
        span.classList.add("text-[#FF5F37]");
        console.log("مقدار", selected);
      }
    });
  });

  choosen.addEventListener("click", () => {
    choosen.classList.add("hidden");
    span.remove();
    tagsBtn.classList.remove("hidden");
    tags.classList.remove("hidden");
  });
  //
  //   function taskBox() {
  //     let ali = document.createElement("div");
  //     return ali;
  //   }
  //
  document.getElementById("task-add").addEventListener("click", () => {
    let taskName = document.getElementById("task-name").value;
    console.log(taskName);
    console.log(document.getElementById("task-description").value);
    console.log(span.textContent);
    empty.classList.add("hidden");
    form.classList.add("hidden");
    addBtn.classList.remove("hidden");
    let div = document.createElement("div");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    div.classList.add(
      "w-full",
      "h-[100px]",
      "border",
      "border-[#E9E9E9]",
      "rounded-xl",
      "mt-4"
    );
    div.appendChild(check);
    document.getElementById("container").appendChild(div);
  });
});
