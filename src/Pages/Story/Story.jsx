import React from "react";
import StoryView from "../../Component/StoryComponent/StoryView";

const Story = () => {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/19936067/pexels-photo-19936067/free-photo-of-woman-sitting-on-rock-with-clouds-below-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/25677025/pexels-photo-25677025/free-photo-of-people-are-working-in-the-rice-fields-near-a-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/25016474/pexels-photo-25016474/free-photo-of-a-person-riding-a-bike-on-a-road-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/13008664/pexels-photo-13008664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/18816030/pexels-photo-18816030/free-photo-of-narrow-forest-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div>
      <StoryView stories={story} />
    </div>
  );
};

export default Story;
