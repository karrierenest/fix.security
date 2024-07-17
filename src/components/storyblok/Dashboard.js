import { storyblokEditable } from "@storyblok/react";

const Dashboard = ({ blok }) => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8" {...storyblokEditable(blok)}>

    <img src={blok.picture.filename} alt={blok.picture.alt} />

  </div>
);

export default Dashboard;
