const fs = require("fs");
const ObjectsToCsv = require("objects-to-csv-file");
const formatPrice = require("./format-price");

// the cars
const arrayForCars = require("./arrayForCars.js");
const arrayFoReviews = require("./arrayForReviews.js");

main();
async function main() {
  let carsData = [];
  // console.log(
  //   arrayForCars.cars
  //     .filter((car) => car.chargingTimeFast.value !== 0)
  //     .map((car) => `${car.title} ${car.chargingTimeFast.value} h`)
  // );
  // console.log(
  //   arrayForCars.cars
  //     .filter((car) => car.subsidies.value !== 0)
  //     .map((car) => `${car.title} ${car.subsidies.value} EU`)
  // );
  arrayForCars.cars.map((car, index) => {
    let entry = {};
    entry.category = car.category;
    entry.typeClass = car.typeClass;
    entry.modelName = car.title;
    entry.price = formatPrice(car.price);
    // for the photo
    entry["@image"] = `.${car.src}`;

    // leasing
    const netto = car.price;
    let zins = 0.039;
    if (netto < 29994) zins = 0.049;
    if (netto < 10000) zins = 0.059;
    const rest48 = netto * 0.2;
    const help48 = Math.pow(1 + zins / 12, 48);
    const leasingRate48 =
      ((zins / 12 / (1 + zins / 12)) * (-1 * netto * help48 + rest48)) /
      (1 - help48);
    entry.leasingRate = formatPrice(leasingRate48, "de");

    // extras
    for (const [key, value] of Object.entries(car)) {
      if (value?.maxValue) {
        entry = {
          ...entry,
          [key]: `${value.value}-${value.maxValue} ${value?.baseUnit || ""}`,
        };
      }
    }
    //
    entry.subsidies = `${entry?.subsidies?.value || " "} ${
      entry?.subsidies?.unit || " "
    }`;
    entry.batteryGuarantee = `${entry?.batteryGuarantee?.value || " "} ${
      entry?.batteryGuarantee?.unit || " "
    }`;
    entry.guarantee = `${entry?.guarantee?.value || " "} ${
      entry?.guarantee?.unit || " "
    }`;
    entry.rangeLithium = `${
      entry?.rangeLithium?.value
        ? entry?.rangeLithium?.value
        : "230V" + " " + car?.range230V?.value + " " + car?.range230V?.baseUnit
    } ${entry?.rangeLithium?.unit || " "}`;
    entry.range230V = `${entry?.range230V?.value || " "} ${
      entry?.range230V?.unit || " "
    }`;
    entry.chargingTimeFast = `${entry?.chargingTimeFast?.value || " "} ${
      entry?.chargingTimeFast?.unit || " "
    }`;
    // body key value pairs
    for (const [key, value] of Object.entries(car)) {
      if (value?.value) {
        entry = {
          ...entry,
          [key]: `${value.value} ${value?.baseUnit || " "}`,
        };
      }
    }

    //  review part
    entry.reviewNumber = index + 101 + "";

    //
    entry.reviewdate = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).publishedAt;
    entry.slug = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).slug;

    entry.KonzeptFahrzeugvarianten = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[0].content.replace(/### Konzept & Fahrzeugvarianten\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");

    entry.starsKonzeptFahrzeugvarianten = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[0].stars;
    //
    entry.laderaumFlexibilitaet = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[1].content.replace(/### Laderaum & Flexibilität\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");

    entry.starsladeraumFlexibilitaet = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[1].stars;

    //
    entry.antriebAufladung = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[2].content.replace(/### Antrieb und Aufladung\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.starsantriebAufladung = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[2].stars;
    //
    entry.komfortAusstattung = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[3].content.replace(/### Komfort & Ausstattung\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.starskomfortAusstattung = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[3].stars;
    //
    entry.bedienungUndFahrbetrieb = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[4].content.replace(/### Bedienung & Fahrbetrieb\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.starsbedienungUndFahrbetrieb = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[4].stars;
    //
    entry.umwelt = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[5].content.replace(/### Umwelt\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.starsumwelt = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[5].stars;
    //
    entry.preiseGarantie = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[6].content.replace(/### Preise & Garantie\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.starspreiseGarantie = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[6].stars;
    //
    entry.fazit = arrayFoReviews.reviews
      .find((review) => review.slug == car.relatedReviews)
      .content[7].content.replace(/### Fazit\n/g, " ")
      .replace(/###/g, " ")
      .replace(/\n/g, " ");
    entry.gesamt = arrayFoReviews.reviews.find(
      (review) => review.slug == car.relatedReviews
    ).content[7].stars;

    carsData.push(entry);

    return car;
  });
  // arrayFoReviews.reviews.map((review) => {
  //   let entry = {};
  //   entry.modelName = review.slug;
  //   entry.image = review.src.substring(8);
  //   entry.date = review.publishedAt;

  //   entry.KonzeptFahrzeugvarianten = ` ${review.content[0].content}`;
  //   entry.StarsKonzeptFahrzeugvarianten = ` ${review.content[0].stars}`;
  //   entry.LaderaumFlexibilität = ` ${review.content[1].content}`;
  //   entry.starsLaderaumFlexibilität = ` ${review.content[1].stars}`;
  //   entry.antriebAufladung = ` ${review.content[2].content}`;
  //   entry.starsAntriebAufladung = ` ${review.content[2].stars}`;
  //   entry.komfortAusstattung = ` ${review.content[3].content}`;
  //   entry.starsKomfortAusstattung = ` ${review.content[3].stars}`;
  //   entry.bedienungUndFahrbetrieb = ` ${review.content[4].content}`;
  //   entry.starsBedienungUndFahrbetrieb = ` ${review.content[4].stars}`;
  //   entry.umwelt = ` ${review.content[5].content}`;
  //   entry.starsUmwelt = ` ${review.content[5].stars}`;
  //   entry.preiseGarantie = ` ${review.content[6].content}`;
  //   entry.starsPreiseGarantie = ` ${review.content[6].stars}`;
  //   entry.fazit = ` ${review.content[7].content}`;
  //   entry.gesamt = ` ${review.content[7].stars}`;
  //   reviewsData.push(entry);
  //   return review;
  // });
  await writeFile("datenblatt", carsData);
  // reviewsData = [];
}
/*  writing */
/*  writing */
/*  writing */
async function writeFile(filetype, data) {
 

  const csv = new ObjectsToCsv(data);

  const filename = `./pdf-export-${filetype}-autosETV`;
  const file = await csv.toDisk(`${filename}.csv`, {
    delimiter: "\t",
  });
  const utf16buffer = Buffer.from(`\ufeff${file}`, "utf16le");
  fs.writeFileSync(`${filename}.csv`, utf16buffer);
  fs.writeFileSync(`${filename}.txt`, utf16buffer);
}
//

//
// async function writeFile2(filetype, data) {
//   const csv = new ObjectsToCsv(data);
//   // console.log(csv);
//   const filename = `./pdf-export-${filetype}-ReviewsETV`;
//   const file = await csv.toDisk(`${filename}.csv`, {
//     delimiter: "\t",
//   });
//   const utf16buffer = Buffer.from(`\ufeff${file}`, "utf16le");
//   fs.writeFileSync(`${filename}.csv`, utf16buffer);
//   fs.writeFileSync(`${filename}.txt`, utf16buffer);
// }
