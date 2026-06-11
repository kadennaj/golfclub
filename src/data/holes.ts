import hole01 from "../assets/drive-holes/hole-01.jpg";
import hole02 from "../assets/drive-holes/hole-02.jpg";
import hole03 from "../assets/drive-holes/hole-03.jpg";
import hole04 from "../assets/drive-holes/hole-04.jpg";
import hole05 from "../assets/drive-holes/hole-05.jpg";
import hole06 from "../assets/drive-holes/hole-06.jpg";
import hole07 from "../assets/drive-holes/hole-07.jpg";
import hole08 from "../assets/drive-holes/hole-08.jpg";
import hole09 from "../assets/drive-holes/hole-09.jpg";
import hole10 from "../assets/drive-holes/hole-10.jpg";
import hole11 from "../assets/drive-holes/hole-11.jpg";
import hole12 from "../assets/drive-holes/hole-12.jpg";
import hole13 from "../assets/drive-holes/hole-13.jpg";
import hole14 from "../assets/drive-holes/hole-14.jpg";
import hole15 from "../assets/drive-holes/hole-15.jpg";
import hole16 from "../assets/drive-holes/hole-16.jpg";
import hole17 from "../assets/drive-holes/hole-17.jpg";
import hole18 from "../assets/drive-holes/hole-18.jpg";

const HOLE_IMAGES = [
  hole01,
  hole02,
  hole03,
  hole04,
  hole05,
  hole06,
  hole07,
  hole08,
  hole09,
  hole10,
  hole11,
  hole12,
  hole13,
  hole14,
  hole15,
  hole16,
  hole17,
  hole18,
];

export const HOLES = [
  { n: "01", par: "4", yd: "408", hdcp: "4", name: "Opening Dogleg", desc: "A tough opening hole featuring a sharp dogleg left. An aggressive drive around the corner is rewarded with a short approach to a two-tiered green." },
  { n: "02", par: "4", yd: "340", hdcp: "12", name: "Narrow Par 4", desc: "A short but narrow par 4. Hitting your tee shot in the fairway is critical. Favour the right side for a clear look at a long, narrow green guarded by two bunkers." },
  { n: "03", par: "5", yd: "517", hdcp: "16", name: "Reachable Par 5", desc: "A great chance for birdie, reachable in two after a good drive down the left side. Be careful not to go long with your approach." },
  { n: "04", par: "3", yd: "164", hdcp: "18", name: "Short & Tricky", desc: "A short but difficult par 3. Out of bounds right and long, lateral hazard left. The best miss is short of this two-tiered green." },
  { n: "05", par: "4", yd: "389", hdcp: "2", name: "The Carry", desc: "Play to the 150 stake for safety, or be aggressive and carry the water on the right. A wide but sharply two-tiered green awaits." },
  { n: "06", par: "4", yd: "330", hdcp: "14", name: "Sloped Green", desc: "After an ideal tee shot of 200 yards down the right side, pay careful attention to the pin location on this very large and sloped green." },
  { n: "07", par: "3", yd: "195", hdcp: "6", name: "Long Par 3", desc: "Wind often plays a part on this long par 3. Safest misses are short and right; the green has front, middle and back tiers." },
  { n: "08", par: "4", yd: "359", hdcp: "8", name: "Water Left", desc: "Right-centre of the fairway, short of the far bunker, is the ideal target. The approach is difficult with water left and fescue right." },
  { n: "09", par: "3", yd: "166", hdcp: "10", name: "Over Water", desc: "The outward nine ends with a challenging par 3 over water. Favour the left side. Par is a great score here." },
  { n: "10", par: "5", yd: "538", hdcp: "11", name: "Long Par 5", desc: "Downwind this long par 5 can be reached in two; into the wind it becomes a beast. Favour the left side off the tee and on approach." },
  { n: "11", par: "4", yd: "393", hdcp: "1", name: "The Chute", desc: "A notorious tee shot, steeply downhill through a narrow chute of trees to a small landing area sloping right to left." },
  { n: "12", par: "4", yd: "327", hdcp: "9", name: "Pond Carry", desc: "More room left than appears off the tee. Choose a shorter club to stay in front of the pond. Distance control is key on approach." },
  { n: "13", par: "3", yd: "165", hdcp: "15", name: "Elevated Tee", desc: "Club selection is the biggest challenge on this short par 3 with an elevated tee deck. Hazards guard all sides." },
  { n: "14", par: "4", yd: "406", hdcp: "7", name: "Three-Tier Green", desc: "Getting the ball in the fairway is key. Favour the left side off the tee to open a better angle into a small, three-tiered green." },
  { n: "15", par: "4", yd: "330", hdcp: "13", name: "Drivable Risk-Reward", desc: "A drivable par 4 with clear risk-reward. You can still make birdie by laying up safely on the left side of the fairway." },
  { n: "16", par: "4", yd: "319", hdcp: "17", name: "Drivable Dogleg", desc: "Another drivable par 4. The green is less accessible from the tee and asks for a left-to-right shot. Short is a good miss on approach." },
  { n: "17", par: "3", yd: "163", hdcp: "5", name: "Nerve Test", desc: "The last par 3 on the course will test your nerves. The only safe miss is left. Creek and brush wait right, and wind is often a factor." },
  { n: "18", par: "5", yd: "495", hdcp: "3", name: "Make or Ruin", desc: "Rounds are made or ruined on this difficult finishing hole. Choose your 200-yard club off the tee and lay up to 100 yards." },
].map((h, i) => ({
  number: h.n,
  par: h.par,
  yardage: h.yd,
  hdcp: h.hdcp,
  name: h.name,
  description: h.desc,
  image: HOLE_IMAGES[i],
}));

export { hole08 };
