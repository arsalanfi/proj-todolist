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
  document.getElementById("task-add").addEventListener("click", () => {
    let taskName = document.getElementById("task-name").value;
    console.log(taskName);
    let taskDescription = document.getElementById("task-description").value;
    console.log(taskDescription);
    let textTag = span.textContent;
    empty.classList.add("hidden");
    form.classList.add("hidden");
    addBtn.classList.remove("hidden");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let divInput = document.createElement("div");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    div1.classList.add(
      "w-full",
      "h-fit",
      "border",
      "border-[#E9E9E9]",
      "rounded-xl",
      "mt-4",
      "py-[12px]",
      "px-[16px]"
    );
    div2.classList.add("flex", "gap-4");
    checkBox.classList.add(
      "w-5",
      "h-5",
      "accent-[#007BFF]",
      "rounded-[5px]",
      "border",
      "border-[#CCCCCC]",
      "cursor-pointer",
      "checked:border-none"
    );
    divInput.classList.add("flex", "flex-col", "gap-3", "w-full");

    document.getElementById("container").appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(checkBox);
    div2.appendChild(divInput);
    //task-name
    let one = document.createElement("p");
    one.append(taskName);
    one.classList.add("font-[600]", "text-[14px]", "text-[#242424]");
    divInput.appendChild(one);
    //task-tag
    let two = document.createElement("p");
    two.append(textTag);
    two.classList.add(
      "font-[700]",
      "text-[10px]",
      "flex",
      "justify-center",
      "items-center",
      "w-fit",
      "py-[2px]",
      "px-[8px]",
      "rounded-[4px]"
    );
    if (two.textContent == "پایین") {
      two.classList.add("bg-[#C3FFF1]", "text-[#11A483]");
    } else if (two.textContent == "متوسط") {
      two.classList.add("bg-[#FFEFD6]", "text-[#FFAF37]");
    } else if (two.textContent == "بالا") {
      two.classList.add("bg-[#FFE2DB]", "text-[#FF5F37]");
    }

    divInput.appendChild(two);
    //task-description
    let three = document.createElement("p");
    three.append(taskDescription);
    three.classList.add("font-[400]", "text-[12px]", "text-[#7D7D7F]");
    divInput.appendChild(three);
    //menu
    let menu = document.createElement("img");
    menu.setAttribute("src", "./Img/threedot.svg");
    menu.classList.add("justify-self-end", "self-start", "w-[4px]");
    div2.appendChild(menu);
    //close
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    span.remove();
    choosen.classList.add("hidden");
    tagsBtn.classList.remove("hidden");
    tagImg.classList.toggle("hidden");
    tagImgC.classList.toggle("hidden");
    // tags.classList.remove("hidden");
  });
});
