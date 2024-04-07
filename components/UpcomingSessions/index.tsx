'use client'

// Basic Imports

import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

// Components Imports
import { SessionCardSkeleton } from "@/components/ui-patterns/Skeleton";
import Link from "next/link";

const UpcomingSessions: React.FunctionComponent = () => {
  const [upcomingSessionsData, setUpcomingSessionsData] = useState<any>([]);

  return (
    <React.Fragment>
      <section className="upcoming-sesions-section py-24 my-12 max-sm:pt-12 max-sm:pb-0 max-sm:mb-16">
        <div className="upcoming-sessions-content-wrapper wrapped-view flex flex-row items-center justify-between max-sm:flex-col">
          <div>
            <div className="flex flex-row items-center justify-between max-sm:flex-col">
              <div>
                <h3 className="upcoming-sessions-title font-semibold tracking-wider text-sm uppercase text-black text-opacity-50">
                  {"Events / Sessions"}
                </h3>
                <h1 className="upcoming-sessions-headline font-product-bungee mt-4 text-4xl flex flex-col text-product-brown items-start justify-start w-fit h-fit max-sm:items-center max-sm:justify-center max-sm:text-3xl">
                  {"Technical Communities"}
                </h1>
              </div>
              {/* <div className="flex flex-row items-center justify-end gap-6 max-sm:flex-col max-sm:mt-6 max-sm:hidden">
                <Button  shade="product-pink">
                  {"All Hackathons"}
                </Button>
                <Button shade="product-teal">
                  {"See past sessions"}
                </Button>
              </div> */}
            </div>

            <div className="flex flex-row items-center">
          


    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
        src="/social/polygon.jpg"
          alt="card-image"
          width={350}
          height={200}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Polygon Guild Vadodara
        </Typography>
        <Typography>
          This Community focuses on Blockchain and Web3.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href='https://www.buymeacoffee.com/polygonvadodara'>
        <Button >Read More</Button>
        </Link>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
        src="/social/GDG.jpg"
        width={350}
        height={200}

          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Google Developer Group Baroda
        </Typography>
        <Typography>
         This is the Google Developer Group.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">

      <Link href='https://gdg.community.dev/gdg-baroda/'>

        <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
        src="/social/AWS.jpg"
        width={350}
        height={200}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          AWS Community Vadodara
        </Typography>
        <Typography>
       This is AWS Community
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href='https://www.meetup.com/aws-community-vadodara/'>
        <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
        src="/social/CNCF.jpg"
        width={350}
        height={200}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          CNCF Community 
        </Typography>
        <Typography>
        This Community focuses on Cloud Native and Computing Foundatations.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href='https://community.cncf.io/cloud-native-vadodara/'>
        <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

function SessionCard() {
  return (
    <React.Fragment>
      <div className="session-card">{"Session Card"}</div>
    </React.Fragment>
  );
}

export default UpcomingSessions;
