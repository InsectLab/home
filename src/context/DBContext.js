import { createContext, useEffect, useState } from 'react';

import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [images, setImages] = useState();
    const [positions, setPositions] = useState();
    const [researches, setResearches] = useState();
    const [members, setMembers] = useState(null);
    const [publications, setPublications] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1673365678&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setImages(results.data);
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=157085250&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                console.log("position: " + JSON.stringify(results.data))
                setPositions(results.data);
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1610881085&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setResearches(results.data);
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setMembers(results.data);
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=900809925&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                let publications_temp = results.data.map(x => x.Citation).join("\n\n");
                publications_temp = publications_temp.replaceAll('\\&', '&');
                setPublications(publications_temp);
            }
        })
    },[])
    
    /* const [positions, setPositions] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=157085250&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setPositions(results.data);
            }
        })
    },[]) */

    /* 
    const [researches, setResearches] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1610881085&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setResearches(results.data);
            }
        })
    },[]); */

    /* const [members, setMembers] = useState(null);
    useEffect(() => { 
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setMembers(results.data);
            }
        })
    },[]);
 */
    
    /* const [publications, setPublications] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=900809925&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                let publications_temp = results.data.map(x => x.Citation).join("\n\n");
                publications_temp = publications_temp.replaceAll('\\&', '&');
                setPublications(publications_temp);
            }
        })
    },[]) */

    return (
        <DBContext.Provider value={{
            images, positions, researches, members, publications
        }}>{ children }
        </DBContext.Provider>
    )
}