import heroImage from './assets/img/image-1.png';
import './App.css';
import { useState } from 'react';

function App() {
  const steps = ['Verify Account', 'Social Handles', 'Business Category'];
  const [currentTab, setCurrentTab] = useState(1);
  const [chosenMethod, selectMethod] = useState('BVN');
  const [showAccordion, setVisiblity] = useState(false);

  return (
    <div className='App'>
      <main>
        <div className='hero'>
          <img src={heroImage} alt='hero' />
        </div>
        <div className='container'>
          <div className='register'>
            <div className='text-right'>
              <button className='btn btn-danger'>Logout</button>
            </div>

            <div className='tabs'>
              {steps.map((key, i) => (
                <div
                  onClick={() => setCurrentTab(i + 1)}
                  className={`tab ${i + 1 === currentTab && 'active'} ${
                    currentTab > i + 1 && 'done'
                  }`}
                  key={i}
                >
                  <button className='btn'>
                    {currentTab > i + 1 ? (
                      <i className='fa fa-check'></i>
                    ) : (
                      i + 1
                    )}
                  </button>
                  <span>{key}</span>
                </div>
              ))}
            </div>

            <hr className='divider' />

            <div className='step'>
              <small>Step {currentTab}/3</small>

              <div className='title'>
                <h2 className='mb-0'>{steps[currentTab - 1]}</h2>
                {currentTab === 2 && (
                  <small style={{ color: '#7D8DA7' }}>
                    Enter your business social media handles
                  </small>
                )}
              </div>

              <div className={`account ${currentTab !== 1 && 'd-none'}`}>
                <div className='form-group'>
                  <label>Select a verification method</label>
                  <div className='radio-btns'>
                    {['BVN', 'Personal Account Number'].map((opt) => (
                      <div>
                        <input
                          type='radio'
                          onClick={() => selectMethod(opt)}
                          name='pos'
                          id={opt}
                        />
                        <label for={opt} className='radio-btn'>
                          {opt}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {chosenMethod === 'BVN' ? (
                  <div className='form-group'>
                    <label>Bank Verification Number (11-digits)</label>
                    <input
                      type='number'
                      className='form-input'
                      maxLength={11}
                    />
                  </div>
                ) : (
                  <div className='row'>
                    <div className='form-group'>
                      <label>Account Number</label>
                      <input
                        type='number'
                        className='form-input'
                        maxLength={11}
                      />
                    </div>

                    <div className='form-group'>
                      <label>Select Bank</label>
                      <select className='form-input'>
                        <option></option>
                        <option>Chase Bank</option>
                        <option>Standard Chartered</option>
                      </select>
                    </div>
                  </div>
                )}

                {chosenMethod === 'BVN' && (
                  <div
                    className={`accordion ${showAccordion && 'open'}`}
                    onClick={() => setVisiblity(!showAccordion)}
                  >
                    <div className='header'>
                      <div className='d-flex'>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M5.25 6V5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25V6C13.9926 6 15 7.00736 15 8.25V14.25C15 15.4926 13.9926 16.5 12.75 16.5H5.25C4.00736 16.5 3 15.4926 3 14.25V8.25C3 7.00736 4.00736 6 5.25 6ZM6.75 5.25C6.75 4.00736 7.75736 3 9 3C10.2426 3 11.25 4.00736 11.25 5.25V6H6.75V5.25Z'
                            fill='#5257F5'
                          />
                          <path
                            d='M9.75 11.7993C10.1984 11.54 10.5 11.0552 10.5 10.5C10.5 9.67157 9.82843 9 9 9C8.17157 9 7.5 9.67157 7.5 10.5C7.5 11.0552 7.80165 11.54 8.25 11.7993V12.75C8.25 13.1642 8.58579 13.5 9 13.5C9.41421 13.5 9.75 13.1642 9.75 12.75V11.7993Z'
                            fill='#56F2C3'
                          />
                        </svg>

                        <p>Why we need your BVN</p>
                      </div>
                      <div className='d-flex'>
                        <small>Show</small>
                        <small>Hide</small>
                        <svg
                          width='8'
                          height='8'
                          viewBox='0 0 8 4'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1 3.5L4 0.5L7 3.5'
                            stroke='#5257F5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                    <div class='content'>
                      <div>
                        <p>We only need access to your:</p>
                        <ul>
                          <li>Full Name</li>
                          <li>Phone Number</li>
                          <li>Date of Birth</li>
                        </ul>
                        <hr className='divider' />
                        <div className='d-flex'>
                          <p>🔐</p>
                          <p>
                            Your BVN does not give us access to your bank
                            accounts or transactions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`socials ${currentTab !== 2 && 'd-none'}`}>
                <div className='row'>
                  <div className='form-group'>
                    <label for='abeg'>Choose your Abeg Tag (required)</label>
                    <input className='form-input' id='abeg' />
                    <span>@</span>
                  </div>
                </div>

                <div className='row'>
                  <div className='form-group'>
                    <label>Instagram</label>
                    <input className='form-input' />
                    <span>@</span>
                  </div>

                  <div className='form-group'>
                    <label>Twitter</label>
                    <input className='form-input' />
                    <span>@</span>
                  </div>
                </div>
              </div>

              <div className={`category ${currentTab !== 3 && 'd-none'}`}>
                <div className='row'>
                  <div className='form-group'>
                    <label for='type'>Type of your business</label>
                    <select className='form-input' id='type'>
                      <option></option>
                      <option>Chase Bank</option>
                      <option>Standard Chartered</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Business Category</label>
                    <select className='form-input'>
                      <option></option>
                      <option>Chase Bank</option>
                      <option>Standard Chartered</option>
                    </select>
                  </div>
                </div>

                <div className='row'>
                  <div className='form-group'>
                    <label for='abeg'>
                      Do you use POS machines for your business?
                    </label>
                    <div className='radio-btns'>
                      {['Yes', 'No'].map((opt) => (
                        <div>
                          <input type='radio' name='pos' id={opt} />
                          <label for={opt} className='radio-btn'>
                            {opt}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-right' style={{ marginTop: '30px' }}>
              <button
                className='btn btn-primary'
                onClick={() => currentTab < 3 && setCurrentTab(currentTab + 1)}
              >
                {currentTab === 2
                  ? 'Confirm Social Handles'
                  : currentTab === 1
                  ? 'Continue'
                  : 'Complete'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
