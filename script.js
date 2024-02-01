const body = document.querySelector("body");

function createFirstPage() {
  body.innerHTML = "";
  const section = document.createElement("section");
  section.className = "mars";

  body.append(section);

  const pre_section = document.createElement("div");
  pre_section.className = "pre_section";
  section.append(pre_section);

  const video = document.createElement("video");
  video.src = "media/Mars (video-converter.com).mp4";
  video.setAttribute("muted", "muted");
  video.setAttribute("autoplay", "autoplay");
  video.setAttribute("playsinline", "playsinline");
  video.setAttribute("loop", "loop");
  video.setAttribute("preload", "preload");
  pre_section.append(video);

  const contain = document.createElement("div");
  contain.className = "contain";
  pre_section.append(contain);

  const main_text = document.createElement("h2");
  main_text.innerText = "марс";
  contain.append(main_text);

  const container = document.createElement("div");
  container.className = "container";
  body.append(container);

  const header = document.createElement("header");
  body.append(header);

  const logo = document.createElement("img");
  logo.src = "media/Mars.png";
  header.append(logo);

  const nav = document.createElement("nav");
  nav.className = "menu";
  header.append(nav);

  const ul = document.createElement("ul");
  nav.append(ul);

  ul.insertAdjacentHTML(
    "afterBegin",
    "<li ><a>О МАРСЕ</a></li><li ><a>ПРОЦЕСС</a></li><li ><a>БИЛЕТЫ</a></li><li ><a> НОВОСТИ</a></li><li ><a>КОНТАКТЫ</a></li>"
  );

  const li = document.querySelectorAll("li");
  for (let item of li) {
    item.classList.add("nav_item");
  }

  const a = document.querySelectorAll("a");
  for (let item of a) {
    item.href = "#";
  }

  const buy_button_form = document.createElement("button");
  buy_button_form.innerText = "КУПИТЬ БИЛЕТЫ";
  nav.append(buy_button_form);

  const line_first = document.createElement("div");
  line_first.className = "line-first";
  body.append(line_first);

  const line_second = document.createElement("div");
  line_second.className = "line-second";
  body.append(line_second);

  const line_third = document.createElement("div");
  line_third.className = "line-third";
  body.append(line_third);
  const span_text = document.createElement("span");
  span_text.innerText = "ТОЧКА НАЗНАЧЕНИЯ:";
  body.append(span_text);

  const imageC = document.querySelector("body");
  const image = document.querySelector("section");

  const imageWidth = imageC.clientWidth;
  console.log(imageWidth);

  const imageHeight = imageC.clientHeight;
  buy_button_form.addEventListener("click", () => {
    createSecondPage();
  });
}
function createSecondPage() {
  body.innerHTML = "";

  let large_container = document.createElement("div");
  large_container.className = "large_container";

  let ticket_container = document.createElement("div");
  ticket_container.className = "ticket_container";

  let headeer = document.createElement("div");
  headeer.className = "headeer";

  let tickets = document.createElement("div");
  tickets.className = "tickets";

  let text = document.createElement("h1");
  text.innerText = "БРОНИРОВАНИЕ БИЛЕТОВ";

  let image = document.createElement("img");
  image.id = "exit";
  image.src = "/media/Exit.png";

  let dates = document.createElement("div");
  dates.className = "dates";

  let dates_current_1 = document.createElement("div");
  dates_current_1.className = "dates_current";

  let dates_current_2 = document.createElement("div");
  dates_current_2.className = "dates_current";

  let dates_current_3 = document.createElement("div");
  dates_current_3.className = "dates_current";

  let dates_current_button = document.createElement("div");
  dates_current_button.className = "dates_current_button";

  let date_first = document.createElement("label");
  date_first.for = "date_1";
  date_first.innerText = "Дата заезда";

  let date_second = document.createElement("label");
  date_second.for = "date_2";
  date_second.innerText = "Дата выезда";

  let date_third = document.createElement("label");
  date_third.for = "date_3";
  date_third.innerText = "Количество";

  let first_input = document.createElement("input");
  first_input.type = "text";
  first_input.id = "date_1";
  first_input.placeholder = "13.05.2022";

  let second_input = document.createElement("input");
  second_input.type = "text";
  second_input.id = "date_2";
  second_input.placeholder = "13.05.2032";

  let therd_input = document.createElement("input");
  therd_input.type = "text";
  therd_input.id = "date_3";
  therd_input.placeholder = "1 человек";

  let buy_button = document.createElement("div");
  buy_button.className = "buy_button";

  let button_form = document.createElement("button");
  button_form.innerText = "КУПИТЬ БИЛЕТЫ";

  body.appendChild(ticket_container);
  body.appendChild(large_container);
  large_container.appendChild(ticket_container);
  ticket_container.append(headeer);
  ticket_container.append(dates);
  dates.append(dates_current_1);
  dates_current_1.append(date_first);
  dates_current_1.append(first_input);
  dates.append(dates_current_2);
  dates_current_2.append(date_second);
  dates_current_2.append(second_input);
  dates.append(dates_current_button);
  dates_current_button.append(dates_current_3);
  dates_current_3.append(date_third);
  dates_current_3.append(therd_input);
  dates_current_button.append(buy_button);
  buy_button.append(button_form);
  headeer.append(tickets);
  headeer.append(image);
  tickets.append(text);

  let exit_button = document.querySelector("img");
  exit_button.addEventListener("click", () => {
    createFirstPage();
  });
}

createFirstPage();
