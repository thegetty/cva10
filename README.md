This is the repository for *Corpus Vasorum Antiquorum, Fascicule 10: Athenian Red-Figure Column and Volute Kraters*, by Despoina Tsiafakis, first published in July 2019 by the J. Paul Getty Museum. It is available online at [http://www.getty.edu/publications/cva10](http://www.getty.edu/publications/cva10) and may be downloaded free of charge in multiple formats.

## About the Book

Cataloging some hundred thousand examples of ancient Greek painted pottery held in collections around the world, the authoritative *Corpus Vasorum Antiquorum* (Corpus of Ancient Vases) is the oldest research project of the Union Académique Internationale. Nearly four hundred volumes have been published since the first fascicule appeared in 1922. 

This new fascicule of the *CVA*—the tenth issued by the J. Paul Getty Museum and the first ever to be published open access—presents a selection of Attic red-figure column- and volute-kraters ranging from the late sixth through the early fourth centuries B.C. Among the works included are a significant dinoid volute-krater and a volute-krater with the Labors of Herakles that is attributed to the Kleophrades Painter.

Featuring zoomable images and multiple views of every krater, linked bibliographic references, and indices of attributions and subjects, this open-access, custom catalogue, along with its object data, is available for free online and in multiple formats for download, including PDF, MOBI/Kindle, and EPUB. A paperback reference edition is also available for purchase. 

## Using this Repository

This is the latest in series of multiformat online collection catalogues using [Quire](http://www.getty.edu/publications/digital/platforms-tools.html), the Getty’s new publishing framework. Quire is currently in private beta, with the goal of it being released as free and open source software in the future. In the meantime, users are encouraged to request access at http://bit.ly/quire-beta. This repository can also be run locally to build the online site (but not the PDF or ebook formats) with [Hugo](https://gohugo.io/), the [static site generator](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/) at the core of Quire. 

The research presented here has been thoroughly edited and peer-reviewed and meets the same standards the rest of our publications do. We are dedicated to maintaining the book for years to come at the permanent URL, [http://www.getty.edu/publications/keepitmoving](http://www.getty.edu/publications/keepitmoving), and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the Revision History included with each of the book’s many formats.

The primary content pieces of the book can be found in the `data` and `content` directories. The master branch represents the current, published edition at all times, and the revisions branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Quire 0.17.0
- Node 8.12.0 / npm 6.4.1
- Hugo 0.53
- PrinceXML 12.4
- Pandoc 2.3.1

While v0.17.0 of the core Quire Starter Theme was used, a number of notable customizations were made. Within the theme itself, changes were made to the `source/css/variables.scss` and `source/css/print.scss` files, including the addition of new font, [Cardo](https://fonts.google.com/specimen/Cardo). The font itself can be found in the `source/fonts` directory and was further customized to include an open type stylistic set with a rule that basically said “display Us as Vs”. We use this to make CORPUS VASORUM ANTIQUORUM look like CORPVS VASORVM ANTIQVORVM on the cover and title page.

Outside of the theme, in the project’s `layouts` directory, a number of custom templates are included, including the page templates that generate the various indices. In the print and ebook edition, we follow the traditional convention of CVA plate pages. These two are specified and templated in the `layouts` directory.

### Creating Entry/Plates PDFs

This project includes a simple shell script and the associated files it needs to create PDFs for individual CVA entires that include the entry text and the associated plates. These are then downloadable from each entry page. To run the script:

```
quire preview
bin/page-pdfs.sh
```

## License

© 2019 J. Paul Getty Trust

The text and images of this publication are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
