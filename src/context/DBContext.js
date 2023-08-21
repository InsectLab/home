import { createContext, useEffect, useState } from 'react';

import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [images, setImages] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1673365678&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setImages(results.data);
            }
        })
    },[])

    const [reserches, setReserches] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1610881085&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                results = results.data.map((item) => {
                    if (item.Image.includes("drive.google.com/file/d/")) {
                        return {...item, Image: `https://drive.google.com/uc?export=view&id=${item.Image.match(/\/d\/(.*?)\/view/)[1]}`}
                    } else {
                        return {...item}
                    }
                })
                setReserches(results);
            }
        })
    },[]);

    const [members, setMembers] = useState(null);
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                results = results.data.map((item) => {
                    if (item.Photo.includes("drive.google.com/file/d/")) {
                        return {...item, Photo: `https://drive.google.com/uc?export=view&id=${item.Photo.match(/\/d\/(.*?)\/view/)[1]}`}
                        /* fetch(`https://drive.google.com/uc?export=view&id=${item.Photo.match(/\/d\/(.*?)\/view/)[1]}`)
                            .then(response => response.blob())
                            .then(blob => {
                                const reader = new FileReader();

                                reader.onload = function (e) {
                                const base64Data = e.target.result;
                                console.log("64:" + base64Data); // This is the base64-encoded image data
                                };

                                reader.readAsDataURL(blob);
                            })
                            .catch(error => {
                                console.error("Error fetching or converting image:", error);
                            }); */
                    } else {
                        return {...item}
                    }
                })
                setMembers(results);
            }
        })
    },[]);

    const [publications, setPublications] = useState();
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
    },[])

    useEffect(() => {
        /* publications && console.log("publications: " + publications); */
    }, [publications])

    return (
        <DBContext.Provider value={{
            images, reserches, members, publications
        }}>{ children }
        </DBContext.Provider>
    )
}