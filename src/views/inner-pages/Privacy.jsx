import React from "react";
import { Helmet } from "react-helmet";
import CountDown from "../../components/CountDown";
import HeaderComingSoon from "../../components/header/HeaderComingSoon";
import HeaderDefault2 from "../../components/header/HeaderDefault2";
//import Newsletter from "../../components/Newsletter";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>Πολιτική Απορρήτου</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault2 />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--coming-soon">
          <section
            className="min-vh-100 jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "/assets/img/root/coming-soon-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "12.1875rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="col-xl-7">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Πολιτική Απορρήτου</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    <p
                      className="fz-18 has-3-color"
                      style={{ maxWidth: "37.5rem" }}
                    >
                      
                      A. Εισαγωγή
<br /><br />
1. Το απόρρητο των επισκεπτών του ιστοτόπου μας, είναι πολύ σημαντικό για εμάς και είμαστε αφοσιωμένοι στην προστασία του. Η πολιτική μας εξηγεί πως θα χρησιμοποιήσουμε τις προσωπικές σας πληροφορίες.
<br />
2. Η συναίνεση σας στη χρήση των cookies σε συμφωνία με τους όρους της πολιτικής μας κατά την πρώτη σας επίσκεψη στον ιστότοπο, μας επιτρέπει την χρήση cookies κάθε φορά που επισκέπτεστε τον ιστότοπο μας.
<br /><br />

B. Εύσημα
<br /><br />
Αυτό το έγγραφο δημιουργήθηκε με την χρήση προτύπου από την SEQ Legal (seqlegal.com) και τροποποιήθηκε από το DogPhysio (www.dogphysio.gr)
<br /><br />
C. Συλλογή προσωπικών πληροφοριών
<br /><br />
Οι παρακάτω τύποι προσωπικών πληροφοριών μπορούν να συλλεγούν, να αποθηκευτούν και να χρησιμοποιηθούν:
<br /><br />
Πληροφορίες σχετικές με τον υπολογιστή σας μεταξύ των οποίων η διεύθυνση IP σας, η γεωγραφική σας τοποθεσία ο τύπος και η έκδοση του περιηγητή σας και το λειτουργικό σας σύστημα.
Πληροφορίες σχετικά με τις επισκέψεις σας και τη χρήση του ιστοτόπου περιλαμβάνοντας την εξωτερική πηγή, τη διάρκεια της επίσκεψης, της προβολές σελίδων και τη διαδρομή πλοήγησης στον ιστότοπο;
Πληροφορίες όπως η διεύθυνση email σας, την οποία εισάγετε κατά την εγγραφή στον ιστότοπο.
Πληροφορίες που εισάγετε κατά τη δημιουργία του προφίλ σας στον ιστότοπο μας—για παράδειγμα, το όνομα σας, οι φωτογραφίες προφίλ, το φύλο, η ημερομηνία γέννησης, η προσωπική σας κατάσταση, τα ενδιαφέροντα και τα χόμπι σας, πληροφορίες σχετικά με την εκπαίδευση σας και πληροφορίες σχετικά με την απασχόληση σας.
Πληροφορίες, όπως το όνομα και το email σας, τις οποίες εισάγετε κατά την ρύθμιση των συνδρομών σας και για την αποστολή των emails και/η των ενημερωτικών δελτίων.
Πληροφορίες που εισάγετε κατά τη χρήση υπηρεσιών στον ιστότοπο μας.
Πληροφορίες που προκύπτουν κατά τη χρήση του ιστότοπου, όπως πότε, πόσο συχνά και κάτω από ποιες συνθήκες το χρησιμοποιείτε.
Πληροφορίες σχετικές με τις αγορές σας, τις υπηρεσίες που χρησιμοποιείτε και τις συναλλαγές που κάνετε στον ιστότοπο, οι οποίες περιλαμβάνουν το όνομα, τη διεύθυνση, τον τηλεφωνικά σας αριθμό, τη διεύθυνση του email σας και της πληροφορίες της πιστωτικής σας κάρτας.
Πληροφορίες που κοινοποιείτε στον ιστότοπο με την πρόθεση της δημοσίευσης στο διαδίκτυο, οι οποίες περιλαμβάνουν το όνομα χρήστη σας τις πληροφορίες προφίλ σας και το περιεχόμενο των δημοσιεύσεών σας.
Πληροφορίες που περιέχονται σε οποιαδήποτε επικοινωνία σας με εμάς μέσω email ή μέσω του ιστοτόπου, περιλαμβάνοντας το περιεχόμενο επικοινωνίας και τα μεταδεδομένα (metadata).
Οποιαδήποτε άλλη προσωπική πληροφορία μας στέλνετε.
Προτού αποκαλύψετε οποιαδήποτε προσωπικές πληροφορίες κάποιου τρίτου ατόμου, θα πρέπει να έχετε τη συγκατάθεση αυτού του ατόμου σχετικά με την κοινοποίηση και την επεξεργασία των προσωπικών πληροφοριών του, σύμφωνα με την παρούσα πολιτική.
<br /><br />
D. Χρήση των προσωπικών σας πληροφοριών
<br /><br />
Οι προσωπικές πληροφορίες που υποβάλλονται σε εμάς χρησιμοποιούνται για τους σκοπούς που ορίζονται από αυτή την πολιτική στις σχετικές σελίδες του ιστοτόπου. Μπορούμε να χρησιμοποιήσουμε τις προσωπικές πληροφορίες για τους παρακάτω σκοπούς:
<br /><br />
διαχείριση του ιστοτόπου και της επιχείρησης μας
προσωποποιημένη διαμόρφωση του ιστοτόπου για εσάς
ενεργοποίηση της χρήσης των διαθέσιμων υπηρεσιών σας στον ιστότοπο μας
αποστολή των αγαθών που αγοράζετε μέσω του ιστοτόπου μας
παροχή υπηρεσιών που αγοράζετε μέσω του ιστοτόπου μας
αποστολή κινήσεων, τιμολογίων και υπενθυμίσεων πληρωμής σε εσάς, καθώς και συλλογή πληρωμών από εσάς
αποστολή μη διαφημιστικών επικοινωνιών
αποστολή ειδοποιήσεων μέσω email σχετικά με τα αιτήματά σας
αποστολή του ενημερωτικού δελτίου μας μέσω email αν το έχετε ζητήσει (μπορείτε να μας ενημερώσετε ανά πάσα στιγμή αν πλέον δεν επιθυμείτε το ενημερωτικό δελτίο)
αποστολή διαφημιστικών επικοινωνιών, σχετικών με την επιχείρηση σας ή τις επιχειρήσεις συγκεκριμένων τρίτων μερών οι οποίες πιστεύουμε ότι μπορεί να σας ενδιαφέρουν, μέσω κοινοποιήσεων ή, αν έχετε συμφωνήσει σε αυτό, μέσω by email ή παρόμοιας τεχνολογίας (μπορείτε να μας ενημερώσετε ανά πάσα στιγμή αν πλέον δεν επιθυμείτε διαφημιστικές επικοινωνίες)
παροχή στατιστικών δεδομένων των χρηστών μας σε τρίτα μέρη (τα οποία δεν θα είναι σε θέση να ταυτοποιήσουν κανένα χρήστη από αυτές τις πληροφορίες)
διαχείριση αιτημάτων και παραπόνων που υποβάλατε οι ίδιοι ή σχετίζονται με τον ιστότοπο σας
διατήρηση της ασφάλειας του ιστοτόπου και πρόληψη κατά οποιασδήποτε απάτης
επιβεβαίωση της συμμόρφωσης με τους όρους και προϋποθέσεις παροχής του ιστοτόπου μας (περιλαμβάνοντας και τη επιτήρηση προσωπικών μηνυμάτων που διακινούνται μέσω της ιδιωτικής διαδικτυακής υπηρεσίας μηνυμάτων μας) και
άλλες χρήσεις.<br /><br />
Αν υποβάλλετε προσωπικές πληροφορίες προς δημοσίευση στον ιστότοπο μας, θα δημοσιεύσουμε ή θα χρησιμοποιήσουμε αυτές τις πληροφορίες σε συμφωνία με την αδειοδότηση σας.
<br /><br />
Οι ρυθμίσεις απορρήτου σας μπορούν να χρησιμοποιηθούν για να περιορίσουν τη δημοσίευση των πληροφοριών σας στον ιστότοπο μας και μπορούν να διαμορφωθούν χρησιμοποιώντας τον έλεγχο απορρήτου στον ιστότοπο.
<br /><br />
Δεν θα διοχετεύσουμε τις προσωπικές σας πληροφορίες χωρίς τη συναίνεση σας σε κανένα τρίτο μέρος ή σε οποιαδήποτε εμπορικό τμήμα τρίτου μέρους.
<br /><br />
E. Κοινοποίηση προσωπικών πληροφοριών
<br /><br />
Μπορούμε να κοινοποιήσουμε τις προσωπικές σας πληροφορίες σε οποιονδήποτε από τους υπαλλήλους μας, τα στελέχη, τους ασφαλιστές, ή τους επαγγελματικούς συμβούλους, τους εκπροσώπους τους προμηθευτές ή τους υπεργολάβους μας όπως απαιτείται για τους σκοπούς που αναφέρει η παρούσα πολιτική.
<br /><br />
Μπορούμε να κοινοποιήσουμε τις προσωπικές σας πληροφορίες σε οποιοδήποτε μέλος του ομίλου εταιρειών μας (αυτό σημαίνει τις θυγατρικές μας εταιρείες, την ελέγχου εταιρεία του χαρτοφυλακίου μας και τις θυγατρικές της) όπως απαιτείται για τους σκοπούς που αναφέρει η παρούσα πολιτική.
<br /><br />
Μπορούμε να κοινοποιήσουμε τις προσωπικές μας πληροφορίες:
<br /><br />
στο μέτρο που απαιτείται βάσει νόμου
σε σχέση με οποιαδήποτε τρέχουσα ή μελλοντική νομική διαδικασία
με σκοπό την εδραίωση, άσκηση ή υπεράσπιση των νομίμων δικαιωμάτων μας (μεταξύ των οποίων η παροχή πληροφοριών σε τρίτους με σκοπό την πρόληψη απάτης και την ελάττωση του πιστωτικού κινδύνου)
στον αγοραστή (ή πιθανού αγοραστή) οποιουδήποτε αγαθού της επιχείρισης το οποίο πουλάμε (ή σκεφτόμαστε να πουλήσουμε) και
σε οποιονδήποτε βάσιμα πιστεύουμε ότι μπορεί να ανήκει στην δικαστική η οποιοδήποτε άλλη αρμόδια αρχή σχετικά με την κοινοποίηση πληροφοριών στην περίπτωση που θεωρούμε ότι η αντίστοιχη αρχή θα απαιτήσει την κοινοποίηση των συγκεκριμένων προσωπικών πληροφοριών.
Επίσης όπως αναφέρεται στην παρούσα πολιτική, δεν θα παρέχουμε τις προσωπικές σας πληροφορίες σε τρίτα μέρα.
<br /><br />
F. Διεθνείς μεταφορές δεδομένων
<br /><br />
Οι πληροφορίες που συλλέγουμε μπορεί να αποθηκευτούν να επεξεργαστούν και να μετακινηθούν μεταξύ οποιωνδήποτε χωρών στις οποίες λειτουργούμε έτσι ώστε να μπορούμε να χρησιμοποιήσουμε σύμφωνα με την παρούσα πολιτική.
Οι πληροφορίες που συλλέγουμε μπορούν να μεταφερθούν στις ακόλουθες χώρες που δεν διαθέτουν αντίστοιχη νομοθεσία προστασίας προσωπικών δεδομένων με αυτή που εφαρμόζεται στην Ευρωπαϊκή Οικονομική Περιοχή: οι ΗΠΑ, η Ρωσία η Ιαπωνία η Κίνα και η Ινδία.
Οι προσωπικές πληροφορίες που δημοσιεύετε στον ιστότοπο μας ή υποβάλλετε προς δημοσίευση στον ιστότοπο μας, δύνανται είναι διαθέσιμες μέσω διαδικτύου σε όλο τον κόσμο. Δεν μπορούμε να αποτρέψουμε τη χρήση ή τη λανθασμένη χρήση τέτοιων πληροφοριών από τρίτους.
Συμφωνείτε ρητά στη μεταφορά των προσωρινών δεδομένων η οποία περιγράφεται στην ενότητα F.
<br /><br />
G. Διατήρηση προσωπικών δεδομένων
<br /><br />
Η Ενότητα G ορίζει την διαδικασία και την πολιτική διατήρησης προσωπικών δεδομένων, που έχει σχεδιαστεί για να διασφαλίζει τη συμμόρφωση με τις νομικές μας υποχρεώσεις σχετικά με τη διατήρηση και τη διαγραφή των προσωπικών δεδομένων.
Προσωπικά δεδομένα που επεξεργαζόμαστε για οποιοδήποτε σκοπό δεν θα διατηρούνται για περισσότερο από όσο διάστημα είναι απαραίτητο για αυτό το σκοπό.
Χωρίς προκατάληψη στο άρθρο G-2, συνήθως διαγράφουμε προσωπικά δεδομένα που εμπίπτουν στην παρακάτω κατηγορίες και την αντίστοιχη ημερομηνία/ώρα
προσωπικά δεδομένα τύπου θα διαγράφονται ΕΙΣΑΓΕΤΕ ΗΜΕΡΟΜΗΝΙΑ/ΩΡΑ και
ΕΙΣΑΓΕΤΕ ΕΠΙΠΛΕΟΝ ΗΜΕΡΟΜΗΝΙΑ/ΩΡΑ.
Παρά τις υπόλοιπες διατάξεις που προβλέπει η Ενότητα G, θα διατηρήσουμε έγγραφα (μεταξύ των οποίων και ηλεκτρονικά έγγραφα) που περιέχουν προσωπικά δεδομένα
στο βαθμό που απαιτείται από το νόμο.
αν θεωρούμε ότι τα έγγραφα μπορεί να σχετίζονται με οποιαδήποτε νομική διαδικασία σε ισχύ και
με σκοπό την εδραίωση, άσκηση ή υπεράσπιση των νομίμων δικαιωμάτων μας (μεταξύ των οποίων η παροχή πληροφοριών σε τρίτους με σκοπό την πρόληψη απάτης και την ελάττωση του πιστωτικού κινδύνου)
<br /><br />
H. Ασφάλεια των προσωπικών δεδομένων σας
<br /><br />
Θα λάβουμε τις απαιτούμενες προφυλάξεις σε τεχνικό και οργανωτικό επίπεδο για να αποτρέψουμε την απώλεια, την κακή χρήση η την αλλοίωση των προσωπικών σας δεδομένων.
Θα αποθηκεύσουμε όλα τα προσωπικά δεδομένα που παρέχετε στους ασφαλείς (προστατευμένους με κωδικό- και τείχος προστασίας) διακομιστές.
Όλες οι ηλεκτρονικές χρηματικές συναλλαγές που διενεργούνται στον ιστότοπο μας προστατεύονται από την τεχνολογία κρυπτογράφησης μας.
Αποδέχεστε ότι η μετάδοση πληροφοριών στο διαδίκτυο είναι εγγενώς μη ασφαλής και δεν μπορούμε να εγγυηθούμε την ασφάλεια των δεδομένων που διακινούνται μέσω διαδικτύου.
Είστε υπεύθυνοι να διατηρήσετε εμπιστευτικό τον κωδικού που χρησιμοποιείτε, δεν θα σας ζητήσουμε τον κωδικό σας (παρά μόνο όταν συνδέεστε στον ιστότοπο μας).
<br /><br />
I. Τροποποιήσεις
<br /><br />
Μπορεί να ενημερώνουμε την πολιτικής μας κατά καιρούς δημοσιεύοντας μία νέα έκδοση στον ιστότοπο μας κατά καιρούς. Θα πρέπει περιστασιακά να ελέγχετε τη σελίδα ώστε να σιγουρευτείτε ότι κατανοείτε οποιαδήποτε αλλαγή στην πολιτική μας. Μπορεί να σας ενημερώσουμε για αλλαγές στην πολιτική μας μέσω email ή μέσω ιδιωτικού συστήματος ανταλλαγής μηνυμάτων στον ιστότοπο μας.
<br /><br />
J. Τα δικαιώματα σας
<br /><br />
Μπορείτε να μας ζητήσετε να σας δώσουμε, οποιαδήποτε πληροφορία σας διατηρούμε; η παροχή τέτοιων πληροφοριών υπόκειται στα παρακάτω:
<br /><br />
την πληρωμή τέλους ΕΙΣΑΓΕΤΕ ΤΕΛΟΣ ΑΝ ΥΠΑΡΧΕΙ; και
την παροχή επαρκών στοιχείων ταυτοποίησης σας (ΑΛΛΑΞΤΕ ΤΟ ΚΕΙΜΕΝΟ ΩΣΤΕ ΝΑ ΑΝΑΦΕΡΕΙ ΤΗΝ ΠΟΛΙΤΙΚΗ ΣΑΣ για αυτό το σκοπό, συνήθως δεχόμαστε θεωρημένη φωτοτυπία διαβατηρίου από συμβολαιογράφο και μία φωτοτυπία λογαριασμού υπηρεσίας κοινής ωφέλειας που εμφανίζει την τρέχουσα διεύθυνση σας).
Μπορούμε να παρακρατήσουμε τις προσωπικές πληροφορίες που ζητάτε, για την επιτρεπόμενη από το νόμο περίοδο.
<br /><br />
Μπορείτε να μας ζητήσετε ανά πάσα στιγμή να μην επεξεργαζόμαστε τις προσωπικές σας πληροφορίες για διαφημιστικούς σκοπούς.
<br /><br />
Στην πράξη, συνήθως είτε θα αποδέχεστε ρητά εκ των προτέρων την χρήση των προσωπικών σας πληροφοριών για διαφημιστικούς σκοπούς, είτε θα σας παρέχουμε τη δυνατότητα να εξαιρέσετε τις πληροφορίες σας από τη χρήση για διαφημιστικούς σκοπούς.
<br /><br />
K. Τρίτοι ιστότοποι
<br /><br />
Ο ιστότοπος μας περιλαμβάνει υπερσυνδέσμους σε, και πληροφορίες από, τρίτους ιστότοπους. Δεν μπορούμε να ελέγξουμε και δεν φέρουμε ευθύνη για τις πολιτικές προστασίας και της πρακτικές τρίτων μερών.
<br /><br />
L. Ενημέρωση πληροφοριών
<br /><br />
Παρακαλώ ενημερώστε μας αν οι πληροφορίες που έχουμε για εσάς χρειάζονται ενημέρωση ή διόρθωση.
<br /><br />
M. Cookies
<br /><br />
Ο ιστότοπος μας χρησιμοποιεί cookies. Ένα cookie είναι ένα αρχείο που περιέχει ένα αναγνωριστικό (μία σειρά γραμμάτων και αριθμών) που αποστέλλεται μέσω ενός διακομιστή και αποθηκεύεται στον περιηγητή. Το αναγνωριστικό κατόπιν αποστέλλεται πίσω στο διακομιστή κάθε φορά που ο περιηγητής ζητά μία σελίδα από το διακομιστή. Τα cookies μπορεί να είναι είτε “μόνιμα” ή cookies “σύνδεσης”: ένα μόνιμο cookie αποθηκεύεται σε έναν περιηγητή και παραμένει σε ισχύ μέχρι την ημερομηνία λήξης του, εκτός αν διαγραφεί νωρίτερα από το χρήστη, ένα cookie σύνδεσης, από την άλλη, θα λήξει με το τέλος της σύνδεσης του χρήστη, όταν κλείσει ο περιηγητής. Τα cookies συνήθως δεν περιέχουν πληροφορίες που μπορούν να ταυτοποιήσουν το χρήστη αλλά τα προσωπικά δεδομένα σας που διατηρούμε μπορεί να συνδέονται με δεδομένα που αποθηκεύονται ή ανακτώνται από cookies. ΕΠΙΛΕΞΤΕ ΚΑΤΑΛΛΗΛΗ ΔΙΑΤΥΠΩΣΗ Χρησιμοποιούμε μόνο cookies σύνδεσης/ μόνο μόνιμα cookies / cookies σύνδεσης και μόνιμα στον ιστότοπο μας.
<br /><br />
Τα ονόματα των cookies που χρησιμοποιούμε στον ιστότοπο μας και ο σκοπός χρήσης τους ορίζεται παρακάτω:
χρησιμοποιούμε στον ιστότοπο μας Google Analytics και Adwords για να αναγνωρίζουμε έναν υπολογιστή όταν ένας χρήστης ΣΥΜΠΕΡΙΛΑΒΕΤΕ ΟΛΕΣ ΤΙΣ ΧΡΗΣΕΙΣ ΤΩΝ COOKIES ΣΤΟΝ ΙΣΤΟΤΟΠΟ ΣΑΣ επισκέπτεται τον ιστότοπο / να εντοπίσουμε τους χρήστες κατά την πλοήγηση στον ιστότοπο / να επιτρέψουμε τη χρήση καλαθιού αγορών στον ιστότοπο / να βελτιώσουμε τη λειτουργικότητα του ιστοτόπου / να αναλύσουμε τη χρήση του ιστοτόπου / να διαχειριστούμε τον ιστότοπο / να προστατευτείτε από απάτη και να βελτιώσετε την προστασία του ιστοτόπου / να προσωποποιήσουμε τον ιστότοπο για κάθε χρήστη / να στοχεύσουμε διαφημίσεις που μπορεί να ενδιαφέρουν συγκεκριμένους χρήστες / περιγράψτε τους σκοπούς;
Οι περισσότεροι περιηγητές σας επιτρέπουν να μη δεχτείτε cookies—για παράδειγμα:
στον Internet Explorer (version 10) μπορείτε να αποκλείσετε τα cookies χρησιμοποιώντας τις ρυθμίσεις για cookie που βρίσκονται πατώντας “Εργαλεία”, “Επιλογές Internet”, “Απόρρητο” και “Για Προχωρημένους”
στο Firefox (version 24) μπορείτε να αποκλείσετε όλα τα cookies πατώντας “Εργαλεία,” “Επιλογές,” “Απόρρητο,” επιλέγοντας “Χρήση προσαρμοσμένων ρυθμίσεων για το ιστορικό” από το μενού και αφαιρώντας την επιλογή “Αποδοχή cookies από ιστοτόπους”; και
στο Chrome (version 29), μπορείτε να αποκλείσετε όλα τα cookies αν μπείτε στο μενού “Προσαρμογή και έλεγχος” και πατώντας “Ρυθμίσεις”, “Προβολή σύνθετων ρυθμίσεων”, και “Ρυθμίσεις περιεχομένου” και επιλέγοντας “Αποκλεισμός ιστοτόπων από δεδομένα” κάτω από την επικεφαλίδα “Cookies”.
Ο αποκλεισμός όλων των cookies θα έχει αρνητική επίδραση στη λειτουργικότητα πολλών ιστοτόπων. Αν αποκλείσετε τα cookies, δεν θα μπορείτε να χρησιμοποιήσετε όλες τις λειτουργίες του ιστοτόπου σας.
<br /><br />
                    </p>
                  </div>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.75rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  
                </div>

              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10.375rem", "--ptf-md": "7.1875rem" }}
            ></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;