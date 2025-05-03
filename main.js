window.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("empty-main");
  const form = document.getElementById("add-form");
  const tagsBtn = document.getElementById("tags-Btn");
  const tags = document.getElementById("tags");
  const empty = document.getElementById("whatTask");
  const closeTask = document.getElementById("close-task");
  const tagImg = document.getElementById("tag-img");
  const tagImgC = document.getElementById("tag-img-c");
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
    choosen.classList.remove("bg-[#C3FFF1]", "bg-[#FFEFD6]", "bg-[#FFE2DB]");
    span.removeAttribute("class");
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
      } else if (selected == "متوسط") {
        choosen.classList.add("bg-[#FFEFD6]");
        span.textContent = "متوسط";
        span.classList.add("text-[#FFAF37]");
      } else if (selected == "بالا") {
        choosen.classList.add("bg-[#FFE2DB]");
        span.textContent = "بالا";
        span.classList.add("text-[#FF5F37]");
      }
    });
  });
  choosen.addEventListener("click", () => {
    choosen.classList.add("hidden");
    choosen.classList.remove("bg-[#C3FFF1]", "bg-[#FFEFD6]", "bg-[#FFE2DB]");
    span.removeAttribute("class");
    span.remove();
    tagsBtn.classList.remove("hidden");
    tags.classList.remove("hidden");
  });
  document.getElementById("task-add").addEventListener("click", () => {
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const textTag = span.textContent;
    empty.classList.add("hidden");
    form.classList.add("hidden");
    addBtn.classList.remove("hidden");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const divInput = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    div1.classList.add(
      "w-full",
      "h-fit",
      "border",
      "border-[#E9E9E9]",
      "rounded-xl",
      "mt-4",
      "relative",
      "py-[12px]",
      "pl-[16px]",
      "bg-white"
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
    div3.classList.add("w-[4px]", "h-[78px]", "rounded-l-[10px]");
    divInput.classList.add("flex", "flex-col", "gap-3", "w-full");
    div2.appendChild(div3);
    div1.appendChild(div2);
    div2.appendChild(checkBox);
    div2.appendChild(divInput);
    document.getElementById("container2").append(div1);
    const one = document.createElement("p");
    one.append(taskName);
    one.classList.add("font-[600]", "text-[14px]", "text-[#242424]");
    divInput.appendChild(one);
    //task-tag
    const two = document.createElement("p");
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
      div3.classList.add("bg-[#11A483]");
    } else if (two.textContent == "متوسط") {
      two.classList.add("bg-[#FFEFD6]", "text-[#FFAF37]");
      div3.classList.add("bg-[#FFAF37]");
    } else if (two.textContent == "بالا") {
      two.classList.add("bg-[#FFE2DB]", "text-[#FF5F37]");
      div3.classList.add("bg-[#FF5F37]");
    }

    divInput.appendChild(two);
    //task-description
    const three = document.createElement("p");
    three.append(taskDescription);
    three.classList.add("font-[400]", "text-[12px]", "text-[#7D7D7F]");
    divInput.appendChild(three);
    //menu
    const menu = document.createElement("img");
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
    empty.remove();
    choosen.classList.remove("bg-[#C3FFF1]", "bg-[#FFEFD6]", "bg-[#FFE2DB]");
    span.removeAttribute("class");
  });
});
