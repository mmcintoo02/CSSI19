// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Use querySelector to store the div in a variable.
const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const responsebox = document.querySelector ("#response-box");


// Use addEventListener to respond to a click event.
redButton.addEventListener('click', (e) => {
  console.log("You clicked the red button!");
  responsebox.style.backgroundColor = "red";
  responsebox.innerHTML = "red";
});

greenButton.addEventListener('click', (e) => {
  console.log("You clicked the green button!");
  responsebox.style.backgroundColor = "green";
  responsebox.innerHTML = "green";
});

blueButton.addEventListener('click', (e) => {
  console.log("You clicked the blue button!");
  responsebox.style.backgroundColor = "blue";
  responsebox.innerHTML = "blue";
});


