import Country from "@/components/Country";
import Button from "@/components/UI/Button";
import { getAllNames, getCountryByName } from "@/lib/restcountries";
import { TCountry } from "@/types/country";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Context {
  params: {
    name: string;
  };
}

interface Props {
  data: TCountry;
}

export async function getStaticPaths() {
  const paths = await getAllNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Context) {
  const response = await getCountryByName(params.name);
  return {
    props: {
      data: response,
    },
  };
}

export default function CountryDetails({ data }: Props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={data.flags.png} type="image/x-icon" />
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="pt-10 px-7  md:px-20">
        <Button onClick={() => router.push("/")} text={"Back"} icon={faArrowLeft} />
        <Country {...data} />
      </div>
    </div>
  );
}
