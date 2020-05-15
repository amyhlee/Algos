//Closures and first class functions

//write a function called partial that makes the following work

function add(a, b) {
  return a + b
}

const add5 = partial(add, 5)

add5(4) // 9

//partial accepts two arguments, function and number
//partial must return a function, because we're assigning its return value to add5 and then calling add5()

function partial(fn, num) {
  return function(b) {
    return fn(num, b)
  }
}

// closure, pass by value, pass by reference
// when a variable is passed into a function as an argument, it is passed by reference --> "copied"

//produces side effect

<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>

//solution

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = (frozenBtnNum => {
      return () => {

        // Tell her what she's won!
        alert(prizes[frozenBtnNum]);
      };
    })(btnNum); // LOOK! We're passing btnNum to our anonymous function here!
  }
</script>
