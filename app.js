
    const typing3 = document.getElementById('text3');
    const typing1 = document.getElementById('text1');
    const typing2 = document.getElementById('text2');
    const btn = document.getElementById('btn1');

    function fun1() {

      let nameTyped = document.getElementById('text1')
      let emailTyped = document.getElementById('text2')
      let commentTyped = document.getElementById('text3')

      if (nameTyped.value.length && commentTyped.value.length > 0) {
        var tag2 = document.createElement("p2");
      var text2 = document.createTextNode(typing3.value);
      tag2.appendChild(text2);
      var element = document.getElementById("output1");
      element.prepend(tag2);

      var tag3 = document.createElement("p3");
      var currentdate = new Date().toLocaleString();
      var text3 = document.createTextNode(currentdate);
      tag3.appendChild(text3);
      var element = document.getElementById("output1");
      element.prepend(tag3);

      var tag1 = document.createElement("p1");
      var text1 = document.createTextNode(typing1.value);
      tag1.appendChild(text1);
      var element = document.getElementById("output1");
      element.prepend(tag1);
      }
    }

    btn.addEventListener('click', fun1);

    let myText = document.getElementById("text3");
    let wordCount = document.getElementById("wordCount");

    myText.addEventListener("keyup", function () {
      let chars = myText.value.split('');
      wordCount.innerText = chars.length;

      if (chars.length > 140) {
        document.getElementById("text3").style.backgroundColor = "red";
      } else {
        document.getElementById("text3").style.backgroundColor = "white";
      }

    });

    const clearbtn = document.getElementById('btn1');

    clearbtn.addEventListener('click', function handleClick(event) {

      event.preventDefault();

      const inputs = document.querySelectorAll('#text1, #text2, #text3');

      inputs.forEach(input => {
        input.value = '';
      });
    });