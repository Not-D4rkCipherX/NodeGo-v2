import chalk from 'chalk';

export default function displayBanner() {
    console.log(chalk.cyan(` 
                ${chalk.yellow('NODEGO AUTO - BOT')}                
    📢  ${chalk.yellow('Telegram Channel: https://t.me/D4rkCipherX')}`));

    console.log(chalk.yellow('\n════════════════════════════════════════════════════════'));
    console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
    console.log(chalk.yellow('════════════════════════════════════════════════════════\n'));
}
