import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CharacterService} from './character.service';

import {Character} from './character.model';
import {ActivatedRoute, Router} from '@angular/router';




@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CharacterService]
})
export class CharacterComponent  implements OnInit {

    public characters: Character[];
    public character: Character;
    public personalForm: FormGroup;
    public details: any = {};
    showDetails: Boolean = true; // hidden by default
    showList: Boolean = true;
    selected = [];
    private books = [];
    private povbooks = [];
    private allegiances = [];
    private tvSeries = [];
    private playedBy: String;
    private titles: String;
    public p: any;
    public modalRef: NgbModalRef;


    constructor(private formBuilder: FormBuilder,  public modalService: NgbModal,
                private characterService: CharacterService,
                private router: Router) {
    }
    /**
     * initializing the formcontrols
     * calling the function on page load
     *
     */
    ngOnInit() {

        this.getCharacters();

        this.personalForm = this.formBuilder.group({

            'name': [''],
            'aliases': [''],
            'gender': [''],
            'father': [''],
            'mother': [''],
            'spouse': [''],
            'born': null,
            'died': null,
            'culture': null
        });
    }

    /**
     * function to get the list of characters
     * call the service of characters
     *@return the list of characters
     */
    public getCharacters(): void {
        this.characterService.getCharacters().subscribe(characters =>
            this.characters = characters
        );
    }
    public cancelCharacter() {
        this.showList = true;
        this.showDetails = false;
    }

    /**
     * function to get the details of individual character
     * splitting the books to display only name/number instead the entire endpoint on page
     * for security reasons its not good approach to display api on web page
     * @param character
     *
     */
    public editMember(character: Character) {

        this.showList = false;
        this.showDetails = false;
        this.personalForm.controls['name'].setValue(character.name === '' ? 'NA' : character.name);
        this.personalForm.controls['aliases'].setValue(character.aliases);
        this.personalForm.controls['gender'].setValue(character.gender === '' ? 'NA' : character.gender);
        this.personalForm.controls['culture'].setValue(character.culture === '' ? 'NA' : character.culture);
        this.personalForm.controls['born'].setValue(character.born === '' ? 'NA' : character.born);
        this.personalForm.controls['died'].setValue(character.died === '' ? 'NA' : character.died);
        this.personalForm.controls['father'].setValue(character.father === '' ? 'NA' : character.father);
        this.personalForm.controls['mother'].setValue(character.mother === '' ? 'NA' : character.mother);
        this.personalForm.controls['spouse'].setValue(character.spouse === '' ? 'NA' : character.spouse);
       // this.books=character.books;
        if (character.povBooks.length > 0 && character.povBooks !== '') {
            this.povbooks.push(character.povBooks);
        } else {
            this.povbooks = null;
        }
        if (character.allegiances.length > 0 && character.allegiances !== '') {
            this.allegiances.push(character.allegiances);
        } else {
            this.allegiances = null;
        }

        if (character.tvSeries.length > 0 && character.tvSeries !== '' ) {
            this.tvSeries.push(character.tvSeries);
        } else {
            this.tvSeries = null;
        }

        if (character.playedBy && character.playedBy !== '') {
            this.playedBy = character.playedBy;
        } else {
            this.playedBy = null;
        }


        if (character.titles !== '') {
            this.titles = character.titles;
        } else {
            this.titles = null;
        }
        for (let i = 0; i < character.books.length; i++) {
            // character.books[i].split('books/', 2)[1]
            this.books.push({'name': character.books[i].split('books/', 2)[1], 'url': character.books[i]});
        }
    }

    /**
     * function to get the details of individual character and opens in new tab
     * @param url for getting individual character details
     * for security reasons its not good approach to display api on web page
     * @param book
     *
     */
    public openNewTab(character) {
        this.router.navigate([]).then(result => {  window.open('gameofthrone/characterdtl?cdetail=' + character.url, '_blank'); });
    }
}

