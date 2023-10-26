import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DiscoverPage from './DiscoverPage';
import { BrowserRouter} from 'react-router-dom';
import Router from 'react-router-dom';
import AxiosMockAdapter from 'axios-mock-adapter'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"
var foo = "bar"
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
    useNavigate: jest.fn(),
   }));
const mockAxios = new AxiosMockAdapter(axios);
mockAxios.onGet().reply(200, {
            token: 'mockToken',
            username: 'mockUsername',
            data: {
                "page": 1,
                "results": [
                    {
                        "adult": false,
                        "backdrop_path": "/swrquFKfEEzs62e3qocKg0ZuU47.jpg",
                        "genre_ids": [
                            878,
                            14,
                            12,
                            10770
                        ],
                        "id": 1851,
                        "original_language": "en",
                        "original_title": "The Amazing Captain Nemo",
                        "overview": "Captain Nemo (José Ferrer) is found in suspended animation under the sea and revived by modern-day Navy men in order to battle a fiendish mad scientist (Burgess Meredith).",
                        "popularity": 3.178,
                        "poster_path": "/19VzZoyC0udUZ6bLI3xsA3gcV9M.jpg",
                        "release_date": "1978-05-12",
                        "title": "The Amazing Captain Nemo",
                        "video": false,
                        "vote_average": 5.4,
                        "vote_count": 11
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/wQ0r0JRs7elHSKg1SFtdWdKTYKi.jpg",
                        "genre_ids": [
                            12,
                            28,
                            14
                        ],
                        "id": 1865,
                        "original_language": "en",
                        "original_title": "Pirates of the Caribbean: On Stranger Tides",
                        "overview": "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
                        "popularity": 78.587,
                        "poster_path": "/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
                        "release_date": "2011-05-15",
                        "title": "Pirates of the Caribbean: On Stranger Tides",
                        "video": false,
                        "vote_average": 6.5,
                        "vote_count": 13176
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/cwhPnVWXC1B6GBycTqHjMVm6PAp.jpg",
                        "genre_ids": [
                            35,
                            80,
                            12,
                            14
                        ],
                        "id": 1870,
                        "original_language": "fr",
                        "original_title": "Fantômas se déchaîne",
                        "overview": "In the second episode of the trilogy Fantômas kidnaps distinguished scientist professor Marchand with the aim to develop a super weapon that will enable him to menace the world. Fantômas is also planning to abduct a second scientist, professor Lefebvre.",
                        "popularity": 11.3,
                        "poster_path": "/m5fyoLC3CAZbeo1lJnGtbLsC949.jpg",
                        "release_date": "1965-12-08",
                        "title": "Fantomas Unleashed",
                        "video": false,
                        "vote_average": 6.8,
                        "vote_count": 459
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/6gVrbjVlklEAmpEZicmr8Xlodx8.jpg",
                        "genre_ids": [
                            35,
                            80,
                            12,
                            14
                        ],
                        "id": 1875,
                        "original_language": "fr",
                        "original_title": "Fantômas contre Scotland Yard",
                        "overview": "In the third and final episode of the trilogy, Fantômas imposes a head tax on the rich, threatening to kill those who do not comply.",
                        "popularity": 9.593,
                        "poster_path": "/wrs0leNyQwVbUOoXCnfMf3Bix4V.jpg",
                        "release_date": "1967-03-16",
                        "title": "Fantomas vs. Scotland Yard",
                        "video": false,
                        "vote_average": 6.7,
                        "vote_count": 462
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/6iCmueK5xHWqbyob8Yau5yw24Xi.jpg",
                        "genre_ids": [
                            14,
                            28,
                            53,
                            878,
                            27
                        ],
                        "id": 1877,
                        "original_language": "en",
                        "original_title": "Doctor Mordrid",
                        "overview": "An unspeakable evil has come into our dimension and wants to rule over Earth, and only a mysterious sorceror known as Doctor Mordrid can stop him.",
                        "popularity": 4.904,
                        "poster_path": "/wcRAFpE2cYF6oF5EjsSvINpoqxA.jpg",
                        "release_date": "1992-11-02",
                        "title": "Doctor Mordrid",
                        "video": false,
                        "vote_average": 5.3,
                        "vote_count": 45
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/c6UZKwtnuwMEWcQzyrT9lXsyVXj.jpg",
                        "genre_ids": [
                            12,
                            10751,
                            14,
                            878,
                            10770
                        ],
                        "id": 1884,
                        "original_language": "en",
                        "original_title": "The Ewok Adventure",
                        "overview": "The Towani family civilian shuttlecraft crashes on the forest moon of Endor. The four Towani's are separated. Jermitt and Catarine, the mother and father are captured by the giant Gorax, and Mace and Cindel, the son and daughter, are missing when they are captured. The next day, the Ewok Deej is looking for his two sons when they find Cindel all alone in the shuttle (Mace and Cindel were looking for the transmitter to send a distress call), when Mace appears with his emergency blaster. Eventually, the four-year old Cindel is able to convince the teenage Mace that the Ewoks are nice. Then, the Ewoks and the Towani's go on an adventure to find the elder Towanis.",
                        "popularity": 13.045,
                        "poster_path": "/lP7FIxojVrgWsam9efElk5ba3I5.jpg",
                        "release_date": "1984-11-25",
                        "title": "The Ewok Adventure",
                        "video": false,
                        "vote_average": 5.9,
                        "vote_count": 315
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/eGzzbfmnXMaa4LZnJVquP1llZ2R.jpg",
                        "genre_ids": [
                            9648,
                            878,
                            10749,
                            14,
                            53,
                            18
                        ],
                        "id": 1903,
                        "original_language": "en",
                        "original_title": "Vanilla Sky",
                        "overview": "David Aames has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia, his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
                        "popularity": 16.825,
                        "poster_path": "/l1MBK6BUkZtjEqceEMubDUtvvK3.jpg",
                        "release_date": "2001-12-10",
                        "title": "Vanilla Sky",
                        "video": false,
                        "vote_average": 6.8,
                        "vote_count": 3828
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/u1hxf2Co5pm3SJzqFbVyMA8v2N0.jpg",
                        "genre_ids": [
                            28,
                            12,
                            14
                        ],
                        "id": 1930,
                        "original_language": "en",
                        "original_title": "The Amazing Spider-Man",
                        "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
                        "popularity": 67.233,
                        "poster_path": "/jIfkQNARYyERqRAq1p1c8xgePp4.jpg",
                        "release_date": "2012-06-23",
                        "title": "The Amazing Spider-Man",
                        "video": false,
                        "vote_average": 6.7,
                        "vote_count": 16398
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            14
                        ],
                        "id": 1063141,
                        "original_language": "en",
                        "original_title": "Cage",
                        "overview": "\"While babysitting, something lurks outside.\"",
                        "popularity": 0.6,
                        "poster_path": null,
                        "release_date": "",
                        "title": "Cage",
                        "video": false,
                        "vote_average": 0,
                        "vote_count": 0
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            16,
                            35,
                            14
                        ],
                        "id": 774553,
                        "original_language": "en",
                        "original_title": "Rex the Runt: Dinosaurs",
                        "overview": "Our plasticine pooch pal Rex welcomes us to his world, introduces us to his friends, and illustrates how Bad Bob caused dinosaurs' extinction (whoops!)",
                        "popularity": 1.207,
                        "poster_path": "/q7ytGK5trp0utPcjfXLgnIVILKp.jpg",
                        "release_date": "1991-08-24",
                        "title": "Rex the Runt: Dinosaurs",
                        "video": false,
                        "vote_average": 7,
                        "vote_count": 1
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            16,
                            27,
                            14
                        ],
                        "id": 774559,
                        "original_language": "en",
                        "original_title": "Rex the Runt: Dreams",
                        "overview": "Our plasticine pooch pal Rex welcomes us to his dreamworld.",
                        "popularity": 1.02,
                        "poster_path": "/hQQc58syrUvX9ThQ1Dg4XeKaKzb.jpg",
                        "release_date": "1991-08-24",
                        "title": "Rex the Runt: Dreams",
                        "video": false,
                        "vote_average": 8.5,
                        "vote_count": 2
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/nXW824K8BLGL3gkVgb99zqYDJea.jpg",
                        "genre_ids": [
                            14
                        ],
                        "id": 774579,
                        "original_language": "de",
                        "original_title": "Die Hexenprinzessin",
                        "overview": "",
                        "popularity": 2.312,
                        "poster_path": "/g8Ce8TF2ZYoV5HghXXD2KxYawJQ.jpg",
                        "release_date": "2020-12-12",
                        "title": "The Witch Princess",
                        "video": false,
                        "vote_average": 6,
                        "vote_count": 6
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/s54HxtLJI87shYDNeRV6rMwhReJ.jpg",
                        "genre_ids": [
                            14,
                            28,
                            12,
                            18
                        ],
                        "id": 496708,
                        "original_language": "en",
                        "original_title": "Babes with Blades",
                        "overview": "On the dark streets of Draiga, a mining colony occupied by the Visray Empire, lives Azura, the last of a fearsome warrior race known as the Sarnians. After witnessing her once beautiful home world turn into a lifeless husk, Azura must fight to the death in the gladiatorial ring to stay alive. Meanwhile, a group of human freedom fighters form a resistance, seeking to try and protect their families from the oppressive and cruel rule of the Visray Section Commander Sorrentine. Unbeknownst to Azura, the fate of all humans on Draiga is about to rest in her hands. Can she survive long enough to save her colony?",
                        "popularity": 1.197,
                        "poster_path": "/i6jDkZ4xR706Ckbxlj3ogvbupsA.jpg",
                        "release_date": "2018-01-02",
                        "title": "Babes with Blades",
                        "video": false,
                        "vote_average": 3.1,
                        "vote_count": 8
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/o2OSpKzXuB1edCDyVC2MXAxXwyJ.jpg",
                        "genre_ids": [
                            10749,
                            27,
                            53,
                            9648,
                            14
                        ],
                        "id": 633802,
                        "original_language": "ru",
                        "original_title": "Приворот. Чёрное венчание",
                        "overview": "Terror strikes when a heartbroken woman uses black magic to get her husband back.",
                        "popularity": 18.545,
                        "poster_path": "/2AbGdSGlU6CpiV3lswHUgE5CdAA.jpg",
                        "release_date": "2021-02-11",
                        "title": "Dark Spell",
                        "video": false,
                        "vote_average": 6.6,
                        "vote_count": 157
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/7BiJ0mndmNRcq9OWPn6qfJO7ZYE.jpg",
                        "genre_ids": [
                            18,
                            36,
                            14
                        ],
                        "id": 633811,
                        "original_language": "de",
                        "original_title": "Blutsauger",
                        "overview": "1928: Lyovuschka, a Soviet worker, is cast in the role of Trotsky for Eisenstein‘s latest film, but quickly finds his dreams of an actor‘s life shattered when Trotsky falls into Stalin‘s disfavor. Exiled from his homeland, he poses as a wealthy baron and finds himself stuck in a glamorous seaside resort in Germany awaiting a barge that will take him to Hollywood. A summer romance kicks off when he meets the eccentric factory owner Octavia Flambow-Jansen - it's just too bad there are vampires around.",
                        "popularity": 1.469,
                        "poster_path": "/sOKtPIOOYzyNuNhzFt7gC2zQFHQ.jpg",
                        "release_date": "2022-05-12",
                        "title": "Bloodsuckers",
                        "video": false,
                        "vote_average": 4.7,
                        "vote_count": 3
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            28,
                            14,
                            27
                        ],
                        "id": 198992,
                        "original_language": "ko",
                        "original_title": "천년호",
                        "overview": "Once upon a time, under the reign of the three kingdoms, there was a woman who tempts a Buddhist priest named Cho. She is a one-thousand-year-old fox who intends to reincarnate as a human being. Not knowing this, Cho lives with the fox. But in the end, they get separated harboring sadness of unfulfilled love in this world.",
                        "popularity": 1.1,
                        "poster_path": "/4JmNFZ4RodjI3u2FfJuFIYspkz1.jpg",
                        "release_date": "1969-03-08",
                        "title": "A Thousand Year-Old Fox",
                        "video": false,
                        "vote_average": 6.3,
                        "vote_count": 6
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            14,
                            10770
                        ],
                        "id": 1063246,
                        "original_language": "it",
                        "original_title": "La giacca stregata",
                        "overview": "",
                        "popularity": 0.6,
                        "poster_path": null,
                        "release_date": "1969-09-26",
                        "title": "La giacca stregata",
                        "video": false,
                        "vote_average": 0,
                        "vote_count": 0
                    },
                    {
                        "adult": false,
                        "backdrop_path": null,
                        "genre_ids": [
                            28,
                            14
                        ],
                        "id": 1063260,
                        "original_language": "zh",
                        "original_title": "The Macaque Monkey",
                        "overview": "",
                        "popularity": 0.695,
                        "poster_path": "/sgYm3klg3TSyMT36QLwvIluEOJ0.jpg",
                        "release_date": "2021-11-14",
                        "title": "The Macaque Monkey",
                        "video": false,
                        "vote_average": 0,
                        "vote_count": 0
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/yJpGFmoVsDKrVcXSyGf5HTx9i98.jpg",
                        "genre_ids": [
                            27,
                            14,
                            12
                        ],
                        "id": 776506,
                        "original_language": "en",
                        "original_title": "The Blazing World",
                        "overview": "Ever since Margaret was six years old, she has been haunted by the memory of watching her sister drown during an explosive fight between her parents. As a young woman, she slides further into her twisted inner life, ultimately finding herself on the brink of suicide. Through an epic journey down the smokiest and scariest corridors of her imagination, she tries to exorcise the demons pushing her closer and closer to the edge.",
                        "popularity": 1.433,
                        "poster_path": "/wyRVm2a9k7XDbmuBvmv84gbCRqs.jpg",
                        "release_date": "2021-10-15",
                        "title": "The Blazing World",
                        "video": false,
                        "vote_average": 4.8,
                        "vote_count": 13
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/aDfGKWdtNHzDmnHkdDyXz7zoDuy.jpg",
                        "genre_ids": [
                            12,
                            14,
                            28,
                            35,
                            53
                        ],
                        "id": 4442,
                        "original_language": "en",
                        "original_title": "The Brothers Grimm",
                        "overview": "Folklore collectors and con artists, Jake and Will Grimm, travel from village to village pretending to protect townsfolk from enchanted creatures and performing exorcisms. However, they are put to the test when they encounter a real magical curse in a haunted forest with real magical beings, requiring genuine courage.",
                        "popularity": 18.345,
                        "poster_path": "/v6J7QGCSrtvwvqAt6783BbO3h61.jpg",
                        "release_date": "2005-08-26",
                        "title": "The Brothers Grimm",
                        "video": false,
                        "vote_average": 5.8,
                        "vote_count": 2553
                    }
                ],
                "total_pages": 953,
                "total_results": 19041
            }
        });

describe("<Searchbar/>", () => {
    test("Should fetch movie data", () => {
        jest.spyOn(Router , 'useParams').mockReturnValue({ ids: '35,12,14' })
        render(
            <BrowserRouter>
                <DiscoverPage />
            </BrowserRouter>
        );
        const nextPageButton = screen.getByTestId("nextPageButton")
        if(nextPageButton)
        fireEvent.click(nextPageButton)
        const previousPageButton = screen.getByTestId("prevPageButton")
        if(previousPageButton)
        fireEvent.click(previousPageButton)
        const searchbar = screen.getByTestId("searchbar")
        if(searchbar)
        fireEvent.change(searchbar)
        expect(mockAxios).toHaveBeenCalled;

        // Check if user information is displayed
    });

});