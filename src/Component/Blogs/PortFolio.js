import React from "react";

const PortFolio = () => {
  return (
    <div className="mx-10 my-10 w-full">
      <h1 className="text-center text-3xl text-green-600 mb-10">
        My Portfolio
      </h1>
      <div className="lg:flex">
        <div className="w-[40%] mx-2 ">
          <h1>Sheikh Shafi</h1>
          <h1>
            <span>Phone: </span>+8801318020612
          </h1>
          <h1>
            <span>Email: </span>shafiss01318020612@gmail.com
          </h1>
          <br />
          <h1 className="underline text-2xl  text-green-600">Education</h1>
          <p>Bangabandhu College Rajshahi</p>
          <p>HSC (Second Year)</p>
          <br />
          <h1 className="underline text-2xl  text-green-600">Skill</h1>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <br />
          <h1 className="underline text-2xl  text-green-600">Language</h1>
          <li>Bangla</li>
          <li>English</li>
        </div>
        <div class="divider divide-purple-800 lg:divider-horizontal"></div>
        <div className="w-[40%] me-5">
          <br />
          <h1 className="underline text-2xl  text-green-600">Website</h1>
          <h1 className="flex">
            First Website : -
            <a target={"_blank"} href="https://bigbazar-bdb11.web.app/">
              <p className="underline text-blue-500">Website</p>
            </a>
          </h1>
          <h5 className="">
            <span className="underline">Describtion</span>: The Website made by
            react.js , firebase login system and for order the total quantity
            will be change. For database I use mongodb and server language
            node.js
          </h5>
          <br />
          <h1 className="flex">
            Second Website : -
            <a target={"_blank"} href="https://assignment-10-73fc4.web.app/">
              <p className="underline text-blue-500">Website</p>
            </a>
          </h1>
          <h5 className="">
            <span className="underline"> Describtion</span>: The Website made by
            react.js , firebase login system and main focous in private route.
          </h5>
          <br />
          <h1 className="flex">
            Third Website : -
            <a
              target={"_blank"}
              href="https://vermillion-gingersnap-e539ab.netlify.app/"
            >
              <p className="underline text-blue-500">Website</p>
            </a>
          </h1>
          <h5 className="">
            <span className="underline"> Describtion</span>: The Website made by
            react.js main focous in api calling also use here graph in Dashboard
            route.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
