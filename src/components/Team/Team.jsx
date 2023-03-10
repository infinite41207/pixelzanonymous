import Member from "./Member/Member";

const members = [
  {
    name: "PacassoNFT",
    imgSrc: "pacasso.jpg",
    text: "Hey guys! My name is Ruben, most people know me as PacassoNFT ! Let me tell you a little bit about myself. I am 27 years old, I live in the East side, but have family all around mainly in Puerto Rico. Throughout my whole life I've loved two things... helping people and gaming.",
  },
  {
    name: "MKT",
    imgSrc: "mkt.jpg",
    text: "Raymond is a veteran of the United States Marine Corps, security is always on his mind. He dedicates most of his time to the ever growing Web 3/NFT field. He has worked on multiple projects, as a security/admin on discords. He loves to network, and hear new ideas/innovations!",
  },
  {
    name: "Josway",
    imgSrc: "josway.jpg",
    text: "Hobbies are usually building keyboards or playing videogames and soccer. Currently working to create a business in keyboard builds and custom PCs. Started in crypto back in 2019 but didn't take it serious whatso ever fast forward to a couple months back just coming into NFTs and joining this team and another just leaning and growing within it.",
  },
  {
    name: "Meaghan",
    imgSrc: "meaghan.jpg",
    text: "GoldenTrees is a digital artist focusing on pixel art for games and NFTs with a background in fine arts and illustration. She has worked on a number of successful projects as well as been self employed in various artistic fields. She uses her skills to combine the digital and art spaces for an accessible, fun experience!",
  },
];

const Team = () => {
  return (
    <>
      <div id="team-heading">
        <img src="./images/team.png" alt="team" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-4 py-36 ">
        <div className="flex flex-col lg:flex-row gap-x-12 lg:gap-0 ">
          <Member
            memberName={members[0]["name"]}
            text={members[0]["text"]}
            key={members[0]["name"]}
            imgSrc={members[0]["imgSrc"]}
          />
          <img
            src="./images/teamboxes.png"
            className="hidden lg:flex z-10 max-h-[800px] "
            alt="teamboxes"
          />
          <Member
            memberName={members[1]["name"]}
            text={members[1]["text"]}
            key={members[1]["name"]}
            imgSrc={members[1]["imgSrc"]}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-12 items-center">
          <Member
            memberName={members[2]["name"]}
            text={members[2]["text"]}
            key={members[2]["name"]}
            imgSrc={members[2]["imgSrc"]}
          />
          <Member
            memberName={members[3]["name"]}
            text={members[3]["text"]}
            key={members[0]["name"]}
            imgSrc={members[3]["imgSrc"]}
          />
        </div>
      </div>
    </>
  );
};

export default Team;
