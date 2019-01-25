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
  fasicule_no: 10
  country: U.S.A.
  country_fasicule_no: 40
  plate_start: 518
  country_plate_start: 2069
```

## Creating Traditional CVA Plates

The plate layout requires some CVA metadata to be present in the project’s `publication.yml` file. Specifically `institution`, `country`, `fasicule_no`, `plate_start` and `country_plate_start`. See above.

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
  style: column # column | grid
  rows: 2 # how many rows the images should take up on the plate
cva_typology: Volute Krater # optional, displayed in lower corner of plate
---
```

For the style under `cva_plate_layout`, it can be either column or grid. Column will force the images to line up in a single column. Grid will let the images fit as they can, side-by-side or singularly.

For more precise layouts, or for overrides to the default output, custom CSS must be utilized. Each plate and figure can be individually targeted in CSS with a standard format id: `plate-###` and `fig-#`.

```css
#plate-518 {

}
```

```css
#plate-518 #fig-2 {

}
```
