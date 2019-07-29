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

console.log("script is running...");

const basicAlarm = alarmMessage => {
    return alarmMessage;
};

function myAlarm (wakeup){
    document.write("Hey, Michael. Wakeup. It's"+wakeup)

}


myAlarm("6:00am");


function momAlarm(wakeup)
{
    console.log("MOM ITS " +wakeup);
}

momAlarm('7:00am');

function familyAlarm (name, wakeup){
    console.log(name+ "wake up it's "+wakeup)
}

familyAlarm("everyone ", "10:30");

function importantAlarm(wakeup){
    console.log(wakeup.toUpperCase())
}

importantAlarm('5:00am')

function snoozeAlarm(time){
    let newTime = time+1;
    return "The alarm for " + time + " has been changed to " + newTime;
}

console.log( snoozeAlarm(5) );

