//@ts-check

import L from "leaflet";
import "leaflet-iiif";
import "leaflet-fullscreen";

class DeepZoom {
  constructor(id) {
    this.el = id;

    // remove and refresh before init
    // @ts-ignore
    if (figureModal) {
      // @ts-ignore
      if (window.mapID != undefined || window.mapID != undefined) {
        // @ts-ignore
        window.mapID.off();
        // @ts-ignore
        window.mapID.remove();
      }
      let node = document.getElementById(id);
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }

    this.imageURL = $(`#${this.el}`).attr("src");
    this.iiif = $(`#${this.el}`).data("iiif");

    if (this.imageURL) {
      let image = new Image();
      image.src = this.imageURL;
      this.addImageProcess(image)
        .then(arr => {
          this.imgHeight = arr.height;
          this.imgWidth = arr.width;
          this.center = [0, 0];
          this.defaultZoom = 0;
          let zoom = {
            min: 0,
            default: 1,
            max: 5
          };
          this.map = this.createMap(zoom);
          if ($(`#${this.el}`).data("catalogue-entry") === undefined) {
            // @ts-ignore
            window.mapID = this.map;
          }
          this.southWest = this.map.unproject(
            [0, this.imgHeight],
            this.map.getMaxZoom() - 1
          );
          this.northEast = this.map.unproject(
            [this.imgWidth, 0],
            this.map.getMaxZoom() - 1
          );
          let bounds = new L.LatLngBounds(this.southWest, this.northEast);
          this.addTiles(bounds);
          this.runMapTimeouts(this.map);
        })
        .catch(error => console.error(error));
    } else if (this.imageURL && this.iiif) {
      this.center = [0, 0];
      this.defaultZoom = 0;
      let zoom = {
        min: 0.5,
        default: 0,
        max: 4
      };
      this.map = this.createMap(zoom);
      if ($(`#${this.el}`).data("catalogue-entry") === undefined) {
        // @ts-ignore
        window.mapID = this.map;
      }
      this.addLayer(this.iiif, this.map);
      this.runMapTimeouts(this.map);
    } else {
      this.center = [0, 0];
      this.defaultZoom = 0;
      let zoom = {
        min: 0.5,
        default: 0,
        max: 4
      };
      this.map = this.createMap(zoom);
      if ($(`#${this.el}`).data("catalogue-entry") === undefined) {
        // @ts-ignore
        window.mapID = this.map;
      }
      this.addLayer(this.iiif, this.map);
      this.runMapTimeouts(this.map);
    }
  }

  /**
   * runMapTimeouts
   * @description
   * run map timeout functions
   * @param {object} map must be an integer
   */
  runMapTimeouts(map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    this.map.on("fullscreenchange", () => {
      map.invalidateSize();
    });

    $(window).on("resize", event => {
      map.invalidateSize();
    });
  }

  /**
   * addImageProcess
   * @description
   * return an array of the natural height and width of the current image being processed
   * @param {object} img must be an integer
   */
  addImageProcess(img) {
    return new Promise((resolve, reject) => {
      img.onload = () => {
        let arr = [];
        arr["height"] = img.naturalHeight;
        arr["width"] = img.naturalWidth;
        resolve(arr);
      };
      img.onerror = reject;
    });
  }

  createMap(zoom) {
    console.log(zoom);
    return L.map(this.el, {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoom: zoom.default,
      minZoom: zoom.min,
      maxZoom: zoom.max,
      renderer: L.canvas(),
      fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
      }
    });
  }

  addLayer(json, map) {
    if (json) {
      L.tileLayer.iiif(json).addTo(map);
    }
  }

  addTiles(bounds) {
    if (bounds) {
      this.map.setMaxBounds(bounds);
      this.map.fitBounds(bounds);
      let imageOverlay = L.imageOverlay(this.imageURL, bounds, {
        opacity: 0.0
      });
      this.map.addLayer(imageOverlay);
      imageOverlay.on("load", event => {
        setTimeout(() => {
          imageOverlay.setOpacity(1.0);
        }, 250);
      });
    }
  }
}

export default DeepZoom;
