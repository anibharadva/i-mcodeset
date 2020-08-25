import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../character/character.service';
import {Character} from '../character/character.model';
import {CharacterdtlService} from './characterdtl.service';





@Component({
    selector: 'app-characterdtl',
    templateUrl: './characterdtl.component.html',
    styleUrls: ['./characterdtl.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CharacterdtlService]
})
export class CharacterdtlComponent  implements OnInit  {

    public characters: Character[];
    public character: Character;
    public charForm: FormGroup;
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
    private url: string;
    private name: string;


    constructor(private formBuilder: FormBuilder,  public modalService: NgbModal,
                private characterdtlService: CharacterdtlService,
                private router: Router, private route: ActivatedRoute) {
    }

    /**
     * initializing the formcontrols
     * calling the function on page load
     *@param cdetail sets on character module
     */

    ngOnInit() {
        this.url = this.route.snapshot.queryParamMap.get('cdetail');
        this.route.queryParamMap.subscribe(queryParams => {
            this.url = queryParams.get('cdetail');
        });

        this.charForm = this.formBuilder.group({

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

        this.getCharacterById(this.url);
       // this.closeModal();
    }
    public cancelCharacter() {
        this.showList = true;
        this.showDetails = false;
    }

    /**
     * function to get the details of character details
     * splitting the characters and houses to display only name/number instead the entire endpoint on page
     * for security reasons its not good approach to display api on web page
     *
     * @param urlname for getting individual character
     *
     */
    public getCharacterById(urlname: string): void {
        this.characterdtlService.getCharacterById(urlname).subscribe((character) => {
                this.character = character;
                this.charForm.controls['name'].setValue(this.character.name === '' ? 'NA' : this.character.name);
                this.charForm.controls['aliases'].setValue(this.character.aliases);
                this.charForm.controls['gender'].setValue(this.character.gender === '' ? 'NA' : this.character.gender);
                this.charForm.controls['culture'].setValue(this.character.culture === '' ? 'NA' : this.character.culture);
                this.charForm.controls['born'].setValue(this.character.born === '' ? 'NA' : this.character.born);
                this.charForm.controls['died'].setValue(this.character.died === '' ? 'NA' : this.character.died);
                this.charForm.controls['father'].setValue(this.character.father === '' ? 'NA' : this.character.father);
                this.charForm.controls['mother'].setValue(this.character.mother === '' ? 'NA' : this.character.mother);
                this.charForm.controls['spouse'].setValue(this.character.spouse === '' ? 'NA' : this.character.spouse);
                // this.books=character.books;
                if (this.character.povBooks.length > 0 && this.character.povBooks !== '') {
                    this.povbooks.push(this.character.povBooks);
                } else {
                    this.povbooks = null;
                }
                if (this.character.allegiances.length > 0 && this.character.allegiances !== '') {
                    this.allegiances.push(this.character.allegiances);
                } else {
                    this.allegiances = null;
                }

                if (this.character.tvSeries.length > 0 && this.character.tvSeries !== '' ) {
                    this.tvSeries.push(this.character.tvSeries);
                } else {
                    this.tvSeries = null;
                }

                if (this.character.playedBy && this.character.playedBy !== '') {
                    this.playedBy = this.character.playedBy;
                } else {
                    this.playedBy = null;
                }


                if (this.character.titles !== '') {
                    this.titles = this.character.titles;
                } else {
                    this.titles = null;
                }
                for (let i = 0; i < this.character.books.length; i++) {
                    // character.books[i].split('books/', 2)[1]
                    this.books.push({'name': this.character.books[i].split('books/', 2)[1], 'url': this.character.books[i]});
                }
        },
        (error) => { console.log(error); }
        );

    }

}

