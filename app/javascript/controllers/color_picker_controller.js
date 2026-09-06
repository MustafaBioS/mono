import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="color-picker"
export default class extends Controller {
  static targets = ["color", "logo"]

  pick(e) {
    console.log("CLICKED", e.currentTarget.dataset.color)
    const selectedColor = e.currentTarget.dataset.color

    this.logoTarget.src = this.logoTarget.dataset[`${selectedColor}Src`]

    this.colorTargets.forEach((image) => {
      const color = image.dataset.color
      

      image.src =
        color === selectedColor
          ? image.dataset.pickedSrc
          : image.dataset.normalSrc
    })
  }
}
