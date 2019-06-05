/* eslint-disable no-undef */
import React, { Component } from 'react';
import './landing-page.css';
import bushaLogo from './img/busha-learn-logo.png';
import styled, { css } from 'styled-components';
import clippedRing from './img/clipped-rings.svg';
import bushaHero from './img/busha-learn-hero-image.png';
import bigIcons from './img/bg-icons.svg';
import caretButton from './img/caret-up.svg';
import folder from './img/folder.svg';
import googlePlay from './img/google-play (1).svg';
import appleLogo from './img/apple.svg';

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<div className="landingPage-first-banner">
					<div className="landingPage-first-banner-left">
						<div className="left-header">
							<div className="busha-logo">
								<Logo src={bushaLogo} alt="busha-logo" />
							</div>
						</div>
					</div>
					<div className="landingPage-first-banner-right">
						<div className="banner-right-bg">
							<img src={clippedRing} alt="clippedRing" className="clip" />
						</div>
						<div className="right-header">
							<div className="nav-a-default"> Ready to buy cypto?</div>
							<Button className="header-button">Get Started</Button>
							<Button smButtonOverlay />
						</div>
					</div>
				</div>
				<div className="landingPage-second-banner">
					<div className="left-position">
						<div className="landingPage-second-banner-left">
							<div className="landingPage-discover">
								<p>Discover cryptocurrency</p>
							</div>
							<div className="landingPage-note">
								<p>
									From the basics of blockchain to why we believe crypto can change the world, get simple answers to
									your top cryptocurrency questions. Ready to explore? Let’s head for the stars.
								</p>
							</div>
							<div className="landingPage-start">
								<Button lgButton>Start exploring</Button>
								<Button lgButtonOverlay />
							</div>
						</div>
					</div>
					<div className="right-position">
						<div className="landingPage-second-banner-right">
							<Banner src={bushaHero} alt="" />
						</div>
					</div>
				</div>
				<div className="landingPage-main">
					<div className="landingPage-first-info">
						<div className="landingPage-main-section">
							<div className="landingPage-first-main-info">
								<div className="first-bullet">
									<MainHeader>Cryptobasic</MainHeader>
									<p className="key-note">
										Every journey begins with a single step, and crypto basics is the perfect place to start. Gain light
										years of knowledge — no degree required.
									</p>
									<div className="close-btn">Close all</div>
									<div className="landingPage-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-second-card">
										{' '}
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-third-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-fourth-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
								</div>
							</div>
							<div className="landingPage-first-side-info">
								<SideImage src={bigIcons} alt="Side Image" />
							</div>
						</div>
					</div>
					<div className="landingPage-second-info">
						<div className="landingPage-second-main-section">
							<div className="landingPage-second-side-info">
								<SideImage src={bigIcons} alt="Side Image" />
							</div>
							<div className="landingPage-second-main-info">
								<div className="first-bullet">
									<MainHeader>Cryptobasic</MainHeader>
									<p className="key-note">
										Every journey begins with a single step, and crypto basics is the perfect place to start. Gain light
										years of knowledge — no degree required.
									</p>
									<div className="close-btn">Close all</div>
									<div className="landingPage-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-second-card">
										{' '}
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-third-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
									<div className="landingPage-fourth-card">
										<Card>
											<div className="card-content">
												<div className="first-card-content">
													<div className="card-header">
														<h4 className="card-title">What is Cryptocurrency</h4>
														<img src={caretButton} alt="More Info" />
													</div>
												</div>
												<div className="second-card-content">
													<p>
														Let’s keep it simple: cryptocurrency is digital cash for the digital age. It’s similar to
														regular money — think $$ or €€ — but it’s digital-only, so there are no bills or coins to
														carry around.
													</p>
												</div>
											</div>
										</Card>
										<Card firstOverlay />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="landingPage-third-info">
						<div className="third-info-content">
							<div className="third-info-first-content">
								<p>Ready to buy bitcoin?</p>
							</div>
							<div className="third-info-second-content">Register and get started with Busha now</div>
							<div className="third-info-third-content">
								<div className="third-content-buttons">
									<Button startButton>Get Started</Button>
									<Button borderButton>
										<Logo folderImage src={googlePlay} alt="Google Play store logo" />Google play
									</Button>
									<Button borderButton>
										<Logo folderImage src={appleLogo} alt="Apple Play store logo" />Apple Store
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="landingPage-fourth-footer">
						<footer className="landingPage-footer">
							<div className="footer-first-row">
								<div className="first-row-items">
									<div className="first-row-item1">
										<Logo folderImage src={folder} alt="Folder" />
									</div>
									<div className="first-row-item2">
										<ul>
											<li>Help Center</li>
											<li>FAQ</li>
											<li>Terms of use</li>
											<li>Privacy Policy</li>
											<li>AML/KYC policy</li>
										</ul>
									</div>
									<div className="first-row-item3">
										<ul>
											<li>Facebook</li>
											<li>Twitter</li>
											<li>Instagram</li>
											<li>Telegram</li>
										</ul>
									</div>
									<div className="first-row-item4">
										<ul>
											<li>hello@busha.co</li>
											<li>We are Hiring!</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="footer-second-row">&copy; 2019 Busha. All rights reserved</div>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

const Logo = styled.img`
	width: 100%;
	height: 100%;
	${props =>
		props.folderImage &&
		css`
			width: 30%;
			height: 30%;
		`};
`;
const Banner = styled.img`
	width: 618px;
	height: 489px;
	position: relative;
	left: -6rem;
`;

const SideImage = styled.img`
	width: 176px;
	height: 255.89px;
	position: relative;
	left: -7rem;
`;

const Button = styled.button`
	color: #ffffff;
	font-family: MarkPro;
	font-size: 1em;
	font-weight: 700;
	letter-spacing: -0.07px;
	line-height: 19px;
	text-align: center;
	background-color: #67c462;
	border: 1px solid #67c462;
	border-radius: 2px;
	width: 151px;
	height: 36px;

	${props =>
		props.startButton &&
		css`
			width: 8rem;
			height: 2.7rem;
		`};

	${props =>
		props.borderButton &&
		css`
			width: 8rem;
			height: 2.7rem;
			background: none;
			color: #67c462;
		`};

	${props =>
		props.lgButton &&
		css`
			width: 190px;
			height: 50px;
		`};

	${props =>
		props.lgButtonOverlay &&
		css`
			width: 190px;
			height: 50px;
			grid-column: 3/4;
			grid-row: 2/3;
			position: absolute;
			left: 8.6rem;
			top: 0.3rem;
			background: none;
		`};

	${props =>
		props.smButtonOverlay &&
		css`
			grid-column: 3/4;
			grid-row: 2/3;
			position: relative;
			right: 3rem;
			top: 0.2rem;
			background: none;
		`};
`;

const MainHeader = styled.header`
	color: #1b314b;
	font-family: MarkPro;
	font-size: 36px;
	font-weight: 700;
	letter-spacing: -0.15px;
	line-height: 43px;
	text-align: left;
	grid-row: 1/2;
`;

const Card = styled.div`
	border: 1px solid #979797;
	border-radius: 2px;
	width: 640px;
	height: 166px;

	${props =>
		props.firstOverlay &&
		css`
			position: relative;
			bottom: 10.2rem;
			left: 0.4rem;
		`};
`;
