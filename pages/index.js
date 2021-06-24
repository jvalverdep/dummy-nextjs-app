import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    title: "Some title 1",
    address: "72 Williams Court Wasilla, AK 99654",
    image:
      "https://www.outfrontmedia.com/-/media/images/ofm/markets/miami/miami-hero.jpg",
  },
  {
    id: "m2",
    title: "Some title 2",
    address: "7828 West Sussex Ave. Butte, MT 59701",
    image: "https://mmimageservice.azurewebsites.net/api/image/office/039",
  },
  {
    id: "m3",
    title: "Some title 3",
    address: "22 John Ave. New Lenox, IL 60451",
    image:
      "https://www.outfrontmedia.com/-/media/images/ofm/markets/miami/miami-hero.jpg",
  },
];

export default function Home() {
  return <MeetupList meetups={meetups} />;
}
