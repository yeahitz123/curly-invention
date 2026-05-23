const lessons = [
{
title:"Variables",
theory:"Variables store data in Luau.",
example:'local coins = 100',
challenge:'Make a variable called score equal to 42',
solution:['local score = 42','local score=42'],
xp:50
},
{
title:"Functions",
theory:"Functions run reusable code.",
example:`local function add(a,b)
 return a+b
end`,
challenge:'Create a function called hello that prints Hello',
solution:[
'local function hello() print("Hello") end',
"local function hello()print('Hello')end"
],
xp:75
},
{
title:"Loops",
theory:"Loops repeat code.",
example:`for i = 1,3 do
 print(i)
end`,
challenge:'Make a for loop from 1 to 3',
solution:[
'for i = 1,3 do print(i) end',
'for i = 1, 3 do print(i) end'
],
xp:80
}
];

let xp = 0;

function render(){
  const app = document.getElementById("app");

  app.innerHTML = `
  <div class="xp">${xp} XP</div>

  <div class="container">

    <div class="title">ROBLOX LUAU LEARNER</div>

    <div class="subtitle">
      Learn Roblox scripting one lesson at a time.
    </div>

    ${lessons.map((lesson,index)=>`
      <div class="lesson">

        <h2>${lesson.title}</h2>

        <p>${lesson.theory}</p>

        <pre>${lesson.example}</pre>

        <div class="challenge">
          <strong>Challenge:</strong><br>
          ${lesson.challenge}
        </div>

        <textarea
          id="code-${index}"
          placeholder="Write Luau code here..."
        ></textarea>

        <br>

        <button onclick="checkAnswer(${index})">
          Run
        </button>

        <div class="result" id="result-${index}"></div>

      </div>
    `).join("")}

  </div>
  `;
}

function checkAnswer(index){

  const lesson = lessons[index];

  const code = document
    .getElementById(`code-${index}`)
    .value
    .trim();

  const result = document.getElementById(`result-${index}`);

  const correct = lesson.solution.some(
    s =>
      s.replace(/\s+/g,' ') ===
      code.replace(/\s+/g,' ')
  );

  if(correct){

    xp += lesson.xp;

    result.className = "result correct";

    result.innerText = `Correct! +${lesson.xp} XP`;

  } else {

    result.className = "result wrong";

    result.innerText = "Not quite. Try again!";
  }

  render();
}

render();
