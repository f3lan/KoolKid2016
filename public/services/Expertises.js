'use strict';

(function() {
    angular.module('MedEx').factory('Expertises', [
        Expertises
    ]);

    function Expertises() {

        var data = [
            "Anesthesiologists",
            "Cardiologists",
            "Coroners",
            "Dentists",
            "Dermatologists",
            "Diabetologists",
            "Emergency physicians",
            "Endocrinologists",
            "Euthanasia doctors",
            "Gastroenterologists",
            "General practitioners",
            "Gynaecologists",
            "Hematologists",
            "High-altitude medicine physicians",
            "Hygienists",
            "Immunologists",
            "Internists",
            "Leprologists",
            "Military physicians",
            "Nephrologists",
            "Neurologists",
            "Neurosurgeons",
            "Nuclear medicine physicians",
            "Obstetricians",
            "Oncologists,",
            "Ophthalmologists",
            "Orthopaedists",
            "Osteopathic physicians",
            "Otolaryngologists",
            "Parasitologists",
            "Pathologists",
            "Pediatricians",
            "Phthisiatrists",
            "Podiatrists",
            "Psychiatrists",
            "Pulmonologists",
            "Radiologists",
            "Rheumatologists",
            "Serologists",
            "Surgeons",
            "Team physicians",
            "Toxicologists",
            "Traumatologists",
            "Tropical physicians",
            "Urologists",
            "Venereologists",
            "Virologists"
        ];

        var all = function() {
            return data;
        };

        return {
            all: all
        }


    }

})();
