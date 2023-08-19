import { createContext, useEffect, useState } from 'react';
import {BibtexParser} from "bibtex-js-parser";

/* import { google } from 'googleapis'; */

import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    /* const credentials = {
        "type": "service_account",
        "project_id": "insectlabwebsite",
        "private_key_id": "d15a2ada556639ab466d0cc4f54b37b1b6a4d284",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjTdVYbLz97o5S\nGoigSfBiGrxSMOAESoxMaqdKKmUNLbf8aq0XAIhbS8ZHLbpmXxVNDHXbuYvFVp3i\n3Wlf/15YNJFskIdMdjsMiH4o5HcxocdnM/FMESelfv+YChho9qj2mFT0wRstB0uf\ndd8zMah98/Ygjhvs8Y430jVkOQwPf2BTv2xvBgWulWQkv8vctJjBa6vsdpd1OJLl\n1qVdnjjpTEGnhA0GgcdVyIJ5S7HZvQRm4anSpdKF7hnP7fphbtCAU2xDJoh0UcVg\nj2qtIhL2UcSHCmtpRxQcfvdo1lVkuYob21RfWMklMjR8SiyvIDvZtuEINJVv4GOv\nrgpuPcvHAgMBAAECggEAUFAMF6PKwrvbBKgF/4a9kRIDAg0FbzbWjxJ42bHF5thQ\nPvSb0c8yQGwgxIrJvGUQzcbOA9TZ16CEn7kyhMLLvGeGCbV+xOz0l3JdUXEi6abd\nsXTLPBTHwc2WmEiGvsBoUnaSeZiq69dFqtPGhJ/sdJ1Rs6sQMtSNlAhut66Srt+1\n53QYfBDyU9VT+bQ8yipG9kjQ1VISuRSo44ULOOHA/WiuFt5/Bo+8FanTljGCjXtl\nPx8ICWnJaZ3C6nTv9dREnD9k38jt3jFFyqcDYkkU3y3Oa78c6q3jPPkMV/SBHxkc\nuG86NNQjWDR5RubYF9y3T+vTWGoDXBVfA669oTfxiQKBgQDST9HIqmzr2k2FByrr\nBfHJemqWvrff5GarfKXlpzqRsBnF1ut8PZdcdsNyRCYg6XcHsA920+vNmtTsJRKC\nAk5s/dqImIIoLf3iKIcDPlSiXWHKw39/HsbvoTD/lFQZpJEw3A7U6tHMZTLcuXvV\ngikaD+ZQHuBKiWBlhtheN+EBPQKBgQDGx78o5Mc+oRvg7yWlMbpPXT7WBH3VRSGZ\n01YzWay8FF6kEmNqAh7jtzQzdwW97w7+i3fDRR2tXPiPw/kh+yiIzedWy0eyJZAm\nEJ91E3E5aOMIQ0OwHHFOZ3YlwzPvG2i1oEFEDTLNN+a9lTrkmNwqTkX/CNnRiSTf\nsOcCUbBJUwKBgQDHINRczyC6X8QuRI8aYFKClen+OS4YS0X68NaTDzehYb/FVq04\nwYhjAAAmXOhNGUCegtDhjd4imosn3CId/tkK0YDs/JmgOYu9auoK5CV2ZjyFo31A\ne3+YvGKMW4EVln/yZymT55IlmVwDKYxaqBcKmitTiSiM6m3fM0ICU54zcQKBgGo7\n/GTNh9Jn5e9bv+G+ZtTdf6R/eASP0rpUIQCGj3Ng64eCMFFKWtnWYnaSyKXOalQN\nk27vtEGfq1OiJ7ZKdUpPyLAxKdsCijxdq+q0/lDxRkx3LmijesatMo5R+aJzIo3W\n3KqS5zCYDKALbhMXwqp1dKEtSMPcKLHH6F3r7GvzAoGBAJubwg3qu9kztFskmioB\nWGAEYXVZDPTe7i0DBNz4BRdElvFeBX7VH4qRyVPEo/U9IAroNOjkRuSF7JwIiLU+\n+/avCX8TmkeuRpw7ioqPoUtO9mhgWzGFKhbRaCfrHd2F9csAxXTiUUFokQCSYbvE\nJ9WacOYL2qTnALA9yol4FmP7\n-----END PRIVATE KEY-----\n",
        "client_email": "insectlabwebsite@insectlabwebsite.iam.gserviceaccount.com",
        "client_id": "102983983968967961225",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/insectlabwebsite%40insectlabwebsite.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }
    */
    /* const fetchAndConverToBase64 = (imgURL) => {
        const auth = new google.auth.JWT(
            credentials.client_email,
            null,
            credentials.private_key,
            ['https://www.google.com/auth/drive.readonly']
        );
    } */

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
                    console.log("Reserches1:"+results.data);
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
                console.log(results);
                setPublications(results.data);
            }
        })
    },[])

    useEffect(() => {
        /* member && console.log(member.Publications); */
        /* publications && setPublications(BibtexParser.parseToJSON(members[2].Publications));
        publications && console.log(BibtexParser.parseToJSON(members[2].Publications)); */
        /* publications && console.log("publications"+publications); */
        publications && console.log("111:" + JSON.stringify(publications[0].Citation))
        publications && console.log("222:" + JSON.stringify(BibtexParser.parseToJSON(publications[0].Citation)))
    }, [publications])

    return (
        <DBContext.Provider value={{
            images, reserches, members, publications
        }}>{ children }
        </DBContext.Provider>
    )
}