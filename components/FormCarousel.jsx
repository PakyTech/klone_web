import { Slider } from "react-carousel-npm";

const data = [
  {
    image:
      "https://images.pexels.com/photos/10161004/pexels-photo-10161004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      "https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      "https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg",
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      "https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
  {
    image:
      "https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg",
    description: `Duis sed bibendum libero. Vestibulum ut enim vitae leo finibus condimentum ut sit amet quam. Maecenas eget malesuada sem, id ultrices diam. `,
  },
];

function App() {
  return (
    <div className="App">
      <Slider
        sliderResource={data}
        imageKeyToAccess="imageUrl"
        backgroundColor="#333C19"
        dotColor="#735C19"
        arrowsColor="#126C20"
        arrowHoverColor="#64DF18"
        imageHeight="50vh"
        size={{ height: 2.5, width: 2.5 }}
      />
    </div>
  );
}

export default App;
