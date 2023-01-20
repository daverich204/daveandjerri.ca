import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import {Trans} from "next-i18next";
import {FocusedText} from "../components/FocusedText";

export default function RSVP() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DaveAndJerri.ca > RSVP</title>
        <meta name="description" content="Dave and Jerri > RSVP"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Please&nbsp;<FocusedText active>RSVP</FocusedText> for our wedding.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
          <div className="col-span-1 md:col-span-8">
            <h2 className={styles.subtitle}>
              We'd love it if you could RSVP by June 15, 2023...
            </h2>
            <p className={styles.description}>
              If you have any problems, please reach out to us by at: <br />
              rsvp@daveandjerri.ca
            </p>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="w-full mt-1 md:w-96 md:max-w-full mx-auto">
              <div className="p-6 border border-gray-300 sm:rounded-md">

                <form method="POST" action="/api/rsvp">
                  <label className="block mb-6">
                    <span>What is your name?</span>
                    <input
                      name="name"
                      type="text"
                      className="
              block
              w-full
              mt-1 p-1
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder="Enter your name"
                    />
                  </label>
                  <label className="block mb-6">
                    <span>What is your email address?</span>
                    <input
                      name="email"
                      type="text"
                      className="
              block
              w-full
              mt-1 p-1
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder="Enter your email"
                    />
                  </label>
                  <label className="block mb-6">
                    <span>Will you be attending?</span>

                    <div className="flex justify-center mt-1">
                      <div>
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="attendingInPerson"
                            id="attendingInPerson"
                            checked
                          />
                          <label className="form-check-label inline-block" htmlFor="attendingInPerson">
                            I will be attending in person.
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="attendance"
                            id="attendingVirtually"
                          />
                          <label className="form-check-label inline-block" htmlFor="attendingVirtually">
                            I will be attending virtually.
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="notAttending" id="notAttending"
                          />
                          <label className="form-check-label inline-block" htmlFor="notAttending">
                            I will not be attending.
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="block mb-6">
                    <span>How many people will be attending with you?</span>
                    <input
                      name="number_of_guests"
                      type="number"
                      className="
              block
              w-full
              mt-1 p-1
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder="1"
                    />
                  </label>
                  <label className="block mb-6">
                    <span>Is there anything else we should know?</span>
                    <textarea
                      name="details"
                      className="
              block
              w-full
              mt-1 p-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      rows="3"
                      placeholder="Questions, concerns, something we should be aware of?"
                    ></textarea>
                  </label>
                  <div className="mb-6 justify-center align-center items-center">
                    <button
                      type="submit"
                      className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
              w-full
            "
                    >
                      Submit RSVP
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}