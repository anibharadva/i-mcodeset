import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {HousesService} from './houses.service';
import {Houses} from './houses.model';
import {Router} from '@angular/router';


@Component({
    selector: 'app-houses',
    templateUrl: './houses.component.html',
    styleUrls: ['./houses.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [HousesService]
})
export class HousesComponent  implements OnInit {

    public houses: Houses[];
    public house: Houses;
    public houseForm: FormGroup;
    showDetails: Boolean = false; // hidden by default
    showList: Boolean = true;
    selected = [];
    private seats = [];
    private titles = [];
    private cadetBranches = [];
    private swornMembers = [];
    public p: any;
    public q: any;
    public modalRef: NgbModalRef;
    private ancestralWeapons: any = [];


    constructor(private formBuilder: FormBuilder,  public modalService: NgbModal,
                private housesService: HousesService,
                private router: Router) {
    }


    /**
     * initializing the formcontrols
     * calling the function on page load
     *
     */
    ngOnInit() {

        this.getHouses();

        this.houseForm = this.formBuilder.group({
            'name': [''],
        'isbn': [''],
        'region': [''],
        'coatOfArms': null,
        'words': [''],
        'currentLord': [''],
            'overlord': [''],
        'heir': [''],
        'founded': [''],
        'founder': [''],
        'diedOut': ['']
        });
    }
    public cancelHouses() {
        this.showList = true;
        this.showDetails=false;
    }

    public getHouses(): void {
        this.housesService.getHouses().subscribe(houses =>
            this.houses = houses
        );
    }

    /**
     * function to get the details of individual house
     * splitting the characters and houses to display only name/number instead the entire endpoint on page
     * for security reasons its not good approach to display api on web page
     *
     * @param house
     */

    public editHouse(house: Houses) {

        this.showList = false;
        this.showDetails = true;
        this.houseForm.controls['name'].setValue(house.name === '' ? 'NA' : house.name);
        this.houseForm.controls['region'].setValue(house.region === '' ? 'NA' : house.region);
        this.houseForm.controls['coatOfArms'].setValue(house.coatOfArms === '' ? 'NA' : house.coatOfArms);
        this.houseForm.controls['words'].setValue(house.words === '' ? 'NA' : house.words);
        this.houseForm.controls['currentLord'].setValue(house.currentLord === '' ? 'NA' : 'Character-' + house.currentLord.split('characters/', 2)[1]);
        this.houseForm.controls['heir'].setValue(house.heir === '' ? 'NA' : 'Character-' + house.heir.split('characters/', 2)[1]);
        this.houseForm.controls['overlord'].setValue(house.overlord === '' ? 'NA' :'House-'+ house.overlord.split('houses/',2)[1]);
        this.houseForm.controls['founded'].setValue(house.founded === '' ? 'NA' : house.founded);
        this.houseForm.controls['founder'].setValue(house.founder === '' ? 'NA' : 'Character-'+ house.founder.split('characters/',2)[1]);
        this.houseForm.controls['diedOut'].setValue(house.diedOut === '' ? 'NA' : house.diedOut);

        if (house.ancestralWeapons.length > 0 ) {
            this.ancestralWeapons.push(house.ancestralWeapons);
        }
        if (house.titles.length > 0 && house.titles !== '' ) {
            this.titles.push(house.titles);
        } else {
            this.titles = null;
        }
        if (house.seats.length > 0 || house.seats !== '' ) {
            this.seats.push(house.seats);
        } else {
            this.seats = null;
        }
        for (const member of house.swornMembers) {
            this.swornMembers.push({'name': member.split('characters/', 2)[1], 'url': member});
        }
        for (const houseObj of house.cadetBranches) {
            this.cadetBranches.push({'name': houseObj.split('houses/', 2)[1], 'url': houseObj});
        }
    }

}

