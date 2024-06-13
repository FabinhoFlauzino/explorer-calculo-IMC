import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.addEventListener("input", () => Modal.close())
inputHeight.addEventListener("input", () => Modal.close())
form.onsubmit = function (e) {
  e.preventDefault()
  let weight = inputWeight.value
  let height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)

  inputWeight.value = ""
  inputHeight.value = ""
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}