import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Category, PostWidget } from "../components";
import Newsletter from "../components/Newsletter";
import logo from "../images/logo.png";

const About = () => {
  return (
    <>
      <Head>
        <title>EliDotCo - About</title>
      </Head>

      <div className="container mx-auto lg:px-10 px-4">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12
      "
        >
          <div className="col-span-1 lg:col-span-8">
            <div className=" mb-8  bg-white h-full text-center p-6  rounded-lg ">
              <div className=" ">
                <Image
                  alt="Logo"
                  src={logo}
                  placeholder="blur"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className=" text-gray-700 text-lg mt-5 py-5">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <h2 className="font-2xl pb-3">
                    Are You Trying to Become A Devloper but don&apos;t know how
                    or where to start or are you looking to stay up to date with
                    the latest technology in this every-evolving industry, then
                    this blog is for you
                  </h2>

                  <p>
                    As many of you will now, i too feeled a couple of years ago
                    when i was introuced to this industry. I tried learn by
                    watching videos from youtube and though it was fine for
                    awhile i soon realised i was locked in the scope of the
                    tutorials i was watching. After months of no improvement i
                    finally decided to stop watching videos and learn from
                    documentations and blogs i found . Fusing the two was hard
                    but worth while as i got my first job 4 months later as a
                    junior Web devloper i am currenly freelancer with years of
                    hands-on experince
                  </p>

                  <h3>So how Can i help you ?</h3>
                  <p>
                    I write 2-3 times a week about front end technologies ,
                    Frameworks,skills and how to be become the best devloper you
                    can be if you dont want to miss any of my writings, you can
                    subscribe to the newsletter and recieve my updates on my
                    blog at weekends to catch up .
                  </p>
                  <Newsletter />
                  <p>
                    You can find all gists,files and folders of any article i
                    write in the github repository and feel free to use them in
                    your projects but remember to evolve beyond them
                  </p>
                  <p>
                    I also post two templates every month for free in the
                    templates section
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-span-1 lg:col-span-4
        "
          >
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
