import React from "react";
import { Link } from "react-router-dom";
import introData from "../schema/intro.json";
import vitalsData from "../schema/vital-signs.json";
import anatomyData from "../schema/anatomy.json";
import exerciseData from "../schema/exercise.json";
import gaitData from "../schema/gait.json";
import balanceData from "../schema/balance.json";
import transfersData from "../schema/transfers.json";
import dmeData from "../schema/dme.json";
import modalitiesData from "../schema/modalities.json";

const sections = [introData, vitalsData, anatomyData, exerciseData, gaitData, balanceData, transfersData, dmeData, modalitiesData];

function SectionList() {

    return (
        <div className="SectionsList">
            <h2 className="text-3xl font-black mb-6 mt-6 text-white">Choose a Section</h2>
            <div className="grid grid-cols-3 gap-4">
            {sections.map(section => (
          <SectionCard key={section.id} section={section} />
        ))}
            </div>
        </div>
    );
};

const SectionCard = ({ section }) => {
    return (
        <div className="container mx-auto px-4">
        <Link to={section.contentUrl} className="block">
          <div className="bg-gray-200 p-4 rounded">
            <img src={section.thumbnail} alt={section.name} className="w-full h-auto cursor-pointer" />
            <div className="mt-2">
              <h3 className="text-lg font-bold">{section.name}</h3>
              <p>{section.description}</p>
            </div>
          </div>
        </Link>
      </div>
      
    );
  };
  

export default SectionList;