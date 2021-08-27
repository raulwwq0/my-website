<template>
  <div id="bg"></div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Background",
  setup() {
    // This function create the boxes for the background
    function createBackground() {
      for (let i = 0; i < 100; i++) {
        // Each box is a span
        const box = document.createElement("span");
        // Adding the class "box" to every span
        box.className = "box";
        // Adding the id "box-(a number to indentify each)" to every span
        box.id = "box-" + i;
        // Adding the boxes to the background div
        document.getElementById("bg").appendChild(box);
      }
    }

    function animateBackground() {
      // Create gsap timeline for the background
      const bgTimeline = gsap.timeline({ defaults: { duration: 1.5 } });
      bgTimeline.to('.box', {
        backgroundColor: '#eee',
        stagger: {
          amount: 1,
          grid: 'auto',
          from: 'random',
          ease: 'power1',
        }
      })

      // Interval for changing color in different boxes every second
      setInterval(() => {
        // randomBoxes are the boxes selected in the 'for' 
        var randomBoxes = '';

        // This 'for' select 10 random boxes and collect each one in randomBoxes
        for (let i = 0; i <= 10; i++) {
          const randomBox = "#box-" + gsap.utils.random(0, 99, 1);
          randomBoxes += randomBox + ', ';
        }

        // This line is for remove the final ', ' from randomBoxes
        randomBoxes = randomBoxes.substring(0, randomBoxes.length - 2);
        
        // Use randomBoxes as a target for the gsap animation
        bgTimeline.to(randomBoxes, {
          // Every box will have a different random color from the array
          backgroundColor: "random([#8effc1, #5efca1, #4eec91, #3edc81, #2ecc71, #1ebc61, #0eac51, #009c41, #008c31, #007c21, #006c11, #005c01])",
          ease:'power1'
        })
        .to(randomBoxes, {
          // Finally return the boxes to their original color
          backgroundColor: "#eee",
        })
      }, 2000);
    }

    // Return all functions to use it
    return { createBackground, animateBackground };
  },
  mounted() {
    this.createBackground();
    this.animateBackground();
  },
};
</script>