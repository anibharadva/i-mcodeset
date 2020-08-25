import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {BooksService} from './books.service';

import {Books} from './books.model';
import {Router} from '@angular/router';




@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [BooksService]
})
export class BooksComponent  implements OnInit {

    public books: Books[];
    public book: Books;
    public bookForm: FormGroup;
    showDetails: Boolean = false; // hidden by default
    showList: Boolean = true;
    selected = [];
    private characters = [];
    private povCharacters = [];
    public p: any;
    public modalRef: NgbModalRef;
    private authors: any = [];


    constructor(private formBuilder: FormBuilder,  public modalService: NgbModal,
                private booksService: BooksService,
                private router: Router) {
    }

    /**
     * initializing the formcontrols
     * calling the function on page load
     *
     */
    ngOnInit() {

        this.getBooks();

        this.bookForm = this.formBuilder.group({
            'name': [''],
            'isbn': [''],
            'numberOfPages': [''],
            'publisher': [''],
            'country': [''],
            'mediaType': null,
            'released': null
        });
    }
    public cancelBooks() {
        this.showList = true;
        this.showDetails = false;
    }



    /**
     * function to get the list of books
     * call the service of books
     *@return the list of books
     */
    public getBooks(): void {
        this.booksService.getBooks().subscribe(books =>
            this.books = books
        );
    }


    /**
     * function to get the details of individual book
     * splitting the pov character  and characters to display only name/number instead the entire endpoint on page
     * for security reasons its not good approach to display api on web page
     * @param book
     *
     */
    public editBooks(book: Books) {

        this.showList = false;
        this.showDetails = true;
        this.bookForm.controls['name'].setValue(book.name === '' ? 'NA' : book.name);
        if (book.authors.length > 0 ) {
            this.authors.push(book.authors);
        }


        for (const povCharObj of book.povCharacters) {
            // character.books[i].split('books/', 2)[1]
            this.povCharacters.push({'name': povCharObj.split('characters/', 2)[1], 'url': povCharObj});
        }
        for (const charObj of book.characters) {
            // character.books[i].split('books/', 2)[1]
            this.characters.push({'name': charObj.split('characters/', 2)[1], 'url': charObj});
        }
    }

}

