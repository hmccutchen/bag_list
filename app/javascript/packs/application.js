// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require turbolinks
//= require_tree.

import Turbolinks from "turbolinks"
// require("@rails/ujs").start();
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import jquery from 'jquery';
window.$ = window.jquery = jquery;

Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "@fortawesome/fontawesome-free/js/all.js"



require("trix")
require("@rails/actiontext")
