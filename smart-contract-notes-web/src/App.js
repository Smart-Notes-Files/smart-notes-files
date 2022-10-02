import 'regenerator-runtime/runtime';
import React from 'react';
import PropTypes from 'prop-types';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const App = ({ contract, currentUser, nearConfig, wallet }) => {

  const signIn = () => {
    wallet.requestSignIn(
      nearConfig.contractName,
      'NEAR Guest Book'
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  return (
    <>
      
      {currentUser
        ? 
		<>
          <div className="container-fluid w-100 p-3">
				<div className="card border-primary mb-3">
					<div className="derecha card-header ">{currentUser.accountId} <button onClick={signOut} className="btn btn-sm btn-info"> Log out </button></div>
					<div className="card-body">
						<h4 className="card-title">Notes</h4>
						
						   <CreateTodo contract={contract} />
						   <br/><br/>
							<TodoList contract={contract} />	
						
					</div>
				</div>
				
			</div>
			<footer className="centerFooter">
				<p> 21 Team / Near Project / Platzi </p>
				</footer>
			</>
        :
		<div>
        <section className="vh-100 gradient-custom">
			<div className="container py-5 h-60">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card bg-dark text-white">
							<div className="card-body p-5 text-center">
								<div className="mb-md-5 mt-md-4 pb-5">
									<h5 className="fw-bold mb-2 text-uppercase">NEAR  Smart  Notes and Files Public</h5>
									<p className="text-white-50 mb-5">Sign In To Use The App</p>
									<button className="btn btn-outline-light btn-lg px-5"  onClick={signIn} type="submit">Login</button>
								</div>
								<div>
									<p className="mb-0">21 Team / Near Project / Platzi</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
      }
    </>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    create: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;