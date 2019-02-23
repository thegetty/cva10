# Corpus Vasorum Antiquorum (CVA)

This is a Quire project that is being customized to conform to the standard Corpus Vasorum Antiquorum (CVA) print publishing format that was established in 19__ by the ____. The following information details these CVA-specific customizations as they are in progress. Other information about Quire and its use can be found at https://gettypubs.github.io/quire/.

## CVA Page

The PDF will output at an oversize 9.625 x 11.875 inches, rather than the default 8.5 x 11 inches of other Quire publications. This size is as close as possible to the traditional CVA trim size, while still being printable by our print-on-demand vendor.

## CVA Metadata

A specialized block of metadata should be added to the project’s `publication.yml` file as in the following example.

```yaml
cva:
  institution: J. Paul Getty Museum
  location: Malibu
  fascicule_no: 10
  country: U.S.A.
  country_fascicule_no: 40
  plate_start: 518
  country_plate_start: 2069
```

## Creating Traditional CVA Plates

The plate layout requires some CVA metadata to be present in the project’s `publication.yml` file. Specifically `institution`, `country`, `fascicule_no`, `plate_start` and `country_plate_start`. See above.

Plate numbers are derived from the file names. So file `518.md` would be plate 518. For each plate, create a Markdown file with the appropriate filename and include a block of YAML as in the sample below. No other content is necessary, nor will any display.

```yaml
---
type: plate
online: false # hides the plate in the TOC and menus, but can still be linked to
cva_figure_groups:
  - accession_no: 86.AE.211.1–2 # displayed under the images in the group
    figures:
      - id: 86AE2111-2-front # id must match one in the figures.yml file
        caption: Front view # optional caption, centered under figure
      - id: 86AE2111-2-back
        caption: Back view
  - accession_no: 86.AE.207
    figures:
      - id: 86AE207-front
      - id: 86AE207-back
cva_plate_layout:
  style: column # see below for options
  rows: 2 # how many rows the images should take up on the plate
cva_typology: Volute Krater # optional, displayed in lower corner of plate
---
```

For the style under `cva_plate_layout`, there are several pre-defined options:

  - `flow` (default): Lets images fit as they can, side-by-side or singularly, and forces images to consistent height
  - `column`: Puts images in single column, images forced to consistent height
  - `grid`: Displays images in a two-column grid, images forced to consistent width
  - `details-top`, `details-middle`, `details-bottom`: Given a set of four images on the page, will make the first two, the middle two, or the bottom two smaller.

For more precise layouts, or for overrides to the default output, custom CSS must be utilized. Each plate and figure can be individually targeted in CSS with a standard format id: `plate-###` and `fig-#`.

```css
#plate-518 {

}
```

```css
#plate-518 #fig-2 {

}
```

## Creating Entry/Plates PDFs

This project includes a simple shell script and the associated files it needs to create PDFs for individual CVA entires that include the entry text and the associated plates. These are then downloadable from each entry page. To run the script:

```
quire preview
bin/page-pdfs.sh
```